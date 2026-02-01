import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";
import Modal from "react-modal";
import ReactGA from "react-ga4";

// ✅ Initialize GA4 once (top-level)
ReactGA.initialize("G-FMGKJH1BV9");

// ✅ Track page views on route changes (React Router)
function GAListener() {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

function start() {
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    console.error('Root element "#root" not found.');
    return;
  }

  // Set react-modal app element once, after #root definitely exists
  Modal.setAppElement(rootEl);

  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <GAListener />
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
