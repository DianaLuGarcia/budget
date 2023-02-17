import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import { BudgetsProvider } from "./components/BudgetsContext";

import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
      <LandingPage />
      <App />
    </BudgetsProvider>
  </React.StrictMode>
);
