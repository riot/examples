import { ApolloClient, createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: '__SET_ENDPOINT_HERE__'
});

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default {
  apollo: client
}
