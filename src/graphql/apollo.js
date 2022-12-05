import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "https://api.inrscience.com/?graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  fetchPolicy: "network-only",
});

export default client;
