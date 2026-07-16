import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/radarbr">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
