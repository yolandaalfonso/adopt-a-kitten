import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // TODO: Update CSS - Maybe use "normalize.css" and "reset.css" - Ask Team!
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* BrowserRouter enables client-side routing */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
