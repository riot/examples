import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

export default new ApolloClient({
  link: createHttpLink({ uri: 'https://www.graphqlhub.com/graphql' }),
  cache: new InMemoryCache()
})