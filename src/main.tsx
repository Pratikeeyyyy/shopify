import { StrictMode } from "react";
import { Toaster } from "sonner";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
// import React from "react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster />
  </StrictMode>,
);
