import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeTypes } from 'merge-graphql-schemas'
import dotenv from 'dotenv'

import { typeDefs, resolvers } from './graphql'


(async () => {
  try {
    dotenv.config()

    const app = express()
    const port = 4000 || process.env.PORT

    const schema = makeExecutableSchema({ typeDefs: mergeTypes(typeDefs, { all: true }), resolvers })

    app.disable('x-powered-by')

    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res })
    })

    await server.applyMiddleware({ app, cors: false })

    app.listen({ port }, () => {
      console.log(`Server started http://localhost:${port}${server.graphqlPath}`)
    })
  } catch (error) {
    console.error(error)
  }
})()
