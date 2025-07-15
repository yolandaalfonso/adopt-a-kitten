// src/App.jsx
import React from "react";
import { Footer } from "./components/Footer/Footer"; // TODO: TO_DEL
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import appRoutes from "./routes/appRoutes";
import Layout from "./components/Layout/Layout"; // TODO: TO_DEL
import HomePage from "./pages/HomePage/HomePage"; // TODO: TO_DEL
import AdoptPage from "./pages/AdoptPage/AdoptPage"; // TODO: TO_DEL
import Header from "./components/Header/Header"; // TODO: TO_DEL
import "./App.css";
// --- NEW IMPORT 15.07.25
import { FavoritesProvider } from "./context/FavoritesContext";
// --- END NEW IMPORT 15.07.25

/*
  Application Entry Point. (The Root of our Component Tree)
  - It is the central Component where our entire React App begins to render.
  - It is also the place where we define which Components should be displayed
    for which URL paths in our App.
  */
function App() {
  return (
    // --- NEW WRAPPER 15.07.25 ---
    <FavoritesProvider>
      <div className="app-container">
        {/* TODO: Place a HEADER here that appears on all pages //TODO: TO_DEL */} 
        {/* <Header /> */}

        <Routes>
          {" "}
          {/* It defines the routing rules. Acts as a container for all our individual <Route> definitions */}
          {/* (!) Map over our appRoutes Array of Objects to create Route Components */}
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

        {/* TODO: Place a FOOTER here that appears on all pages // TODO: TO_DEL */}
        {/* <Footer />*/}
      </div>
    </FavoritesProvider>
    // --- END NEW WRAPPER 15.07.25 ---

    //  <Router>
    //       <Routes>
    //         {/* Ruta principal con Layout */}
    //         <Route path="/" element={<Layout />}>
    //           {/* Rutas hijas que se renderizan dentro del <Outlet /> */}
    //           <Route index element={<HomePage />} />
    //           <Route path="adopt" element={<AdoptPage />} />
    //         </Route>
    //       </Routes>
    //     </Router>
  );
}

export default App;
