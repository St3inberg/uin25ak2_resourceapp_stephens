import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.scss"; 

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found! React app cannot be mounted.");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
