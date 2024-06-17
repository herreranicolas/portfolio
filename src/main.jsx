import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Portfolio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import ThemeProvider from "./context/ThemeProvider.jsx";
import i18n from "./language/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
