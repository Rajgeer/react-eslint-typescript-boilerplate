import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "../assets/styles/custom.css";
import "../assets/styles/index.css";
const rootElement = document.getElementById("root");

// New as of React v18.x
if (!rootElement) throw new Error("Can not find root element with root id");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
