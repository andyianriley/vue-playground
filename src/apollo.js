import Vue from "vue";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import VueApollo from "vue-apollo";

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_HOST || "http://localhost:9080/"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo, {
  apolloClient
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
