import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

export default new ApolloClient({
  link: createHttpLink({ uri: 'https://48p1r2roz4.sse.codesandbox.io' }),
  cache: new InMemoryCache()
})
