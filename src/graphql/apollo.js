import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "https://inrs.epizy.com/graphql";

const client = new ApolloClient({
  uri: API_URL,
  credentials: "include",
  cache: new InMemoryCache(),
});

export default client;
