import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "http://travelcompany.local/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;
