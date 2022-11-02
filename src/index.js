import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeProvider";
import { StateProvider } from "./context/StateProvider";

import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo";

import HttpsRedirect from "react-https-redirect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HttpsRedirect>
    <ApolloProvider client={client}>
      <StateProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StateProvider>
    </ApolloProvider>
  </HttpsRedirect>
);
