import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";

import store from "./stores/stores.ts";

import ErrorBoundary from "./components/molecules/ErrorBoundary/index.tsx";
import App from "./App.tsx";

import "./assets/styles/common.scss";
import "./assets/styles/global.scss";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  </ErrorBoundary>
);
