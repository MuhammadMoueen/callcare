import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { ServiceProvider } from "./context/ServiceContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>u  
    <ThemeProvider>
      <ServiceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServiceProvider>
    </ThemeProvider>
  </StrictMode>
);