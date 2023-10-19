import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRoutes } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

const client = new QueryClient();

function App() {
  const routes = useRoutes(router);

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>{routes}</Provider>
    </QueryClientProvider>
  );
}

export default App;
