import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";

function start() {
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    // If this ever logs, your public/index.html is missing <div id="root"></div>
    console.error('Root element "#root" not found.');
    return;
  }

  // Set react-modal app element once, after #root definitely exists
  Modal.setAppElement(rootEl);

  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  reportWebVitals();
}

// Ensure the DOM is parsed before we try to mount
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
