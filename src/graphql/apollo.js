import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "https://api.inrscience.com/?graphql";
const TEST_URL = "https://alpha.inrscience.com/?graphql";

const client = new ApolloClient({
  uri: window.location.hostname === "localhost" ? TEST_URL : API_URL,
  cache: new InMemoryCache(),
});

export default client;
