// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { useTranslation } from 'react-i18next';

/*
  Application Entry Point. (The Root of our Component Tree)
  - It is the central Component where our entire React App begins to render.
  - It is also the place where we define which Components should be displayed
    for which URL paths in our App.
  */
function App() {
  return (
    <FavoritesProvider>
      <div className="app-container">
        <Routes>
          {/* It defines the routing rules. Acts as a container for all our individual <Route> definitions */}
          {/* (!) Map over our appRoutes Array of Objects to create Route Components */}
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </FavoritesProvider>
  );
}

export default App;
