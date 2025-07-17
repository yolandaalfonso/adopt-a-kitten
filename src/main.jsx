import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // TODO: Update CSS - Maybe use "normalize.css" and "reset.css" - Ask Team!
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import './i18n';
import './assets/styles/main.css'; // 👈 MUY IMPORTANTE


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter> {/* BrowserRouter enables client-side routing */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
