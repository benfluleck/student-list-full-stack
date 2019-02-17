import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'

import { typeDefs, resolvers } from '../../graphql'

const schema = makeExecutableSchema({ typeDefs, resolvers })

export const graphqlTestCall = async (
  query,
  variables
) => {
  return graphql(
    schema,
    query,
    undefined,
    {},
    variables
  )
}
