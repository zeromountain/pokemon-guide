import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
