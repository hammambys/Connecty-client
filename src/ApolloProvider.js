import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
<<<<<<< HEAD
  uri: "https://cors-anywhere.herokuapp.com/https://connecty-server.herokuapp.com/", //http://localhost:5000/
=======
  uri: "https://connecty-server.herokuapp.com/",  //https://connecty-server.herokuapp.com/
>>>>>>> b7ccd20646899044da309ec0fadbb9dda932a4fb
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
