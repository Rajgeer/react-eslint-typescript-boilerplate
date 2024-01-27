import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "../assets/styles/custom.css";
import "../assets/styles/index.css";
import { store } from "../redux/store";
const rootElement = document.getElementById("root");

// New as of React v18.x
if (!rootElement) throw new Error("Can not find root element with root id");

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
