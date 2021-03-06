import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeTypes } from 'merge-graphql-schemas'
import dotenv from 'dotenv'

import db from './models'
import { typeDefs, resolvers } from './graphql'
import middleware from './graphql/middleware'

(async () => {
  try {
    dotenv.config()

    const app = express()
    const port = 4000 || process.env.PORT

    const schema = makeExecutableSchema({ typeDefs: mergeTypes(typeDefs, { all: true }), resolvers })

    app.disable('x-powered-by')

    const schemaWithMiddleware = applyMiddleware(
      schema,
      middleware.studentMiddleware,
      middleware.hobbiesMiddleware
    )

    const server = new ApolloServer({
      schema: schemaWithMiddleware,
      formatError: error => {
        const message = error.message.split('.')

        return {
          message
        }
      }
    })

    await server.applyMiddleware({ app, cors: true })
    await db.sequelize.authenticate()

    app.listen({ port }, async () => {
      await db.sequelize.sync()
      console.log(`Server started http://localhost:${port}${server.graphqlPath}`)
    })
  } catch (error) {
    console.error(error)
  }
})()
