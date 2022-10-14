import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { StateProvider } from "./context/StateProvider";

import client from "./graphql/apollo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <StateProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StateProvider>
  </ApolloProvider>
);
