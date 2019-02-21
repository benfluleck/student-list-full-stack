import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { onError } from 'apollo-link-error'

const graphQLUri = '/graphql'

const httpLink = createHttpLink({ uri: graphQLUri })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache()
})
