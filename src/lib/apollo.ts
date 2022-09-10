import { ApolloClient, InMemoryCache } from '@apollo/client'

export const rickAndMortyClient = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache({})
})

export const serverClient = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_URL,
  cache: new InMemoryCache({})
})