import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route,  BrowserRouter as Router } from "react-router-dom";
import appRoutes from "./routes/appRoutes"; 
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AdoptPage from "./pages/AdoptPage/AdoptPage";
import Header from "./components/Header/Header";
import "./App.css";

/*
  Application Entry Point. (The Root of our Component Tree)
  - It is the central Component where our entire React App begins to render.
  - It is also the place where we define which Components should be displayed
    for which URL paths in our App.
  */
function App() {
  return (
    <div className="app-container">
      {/* TODO: Place a HEADER here that appears on all pages */}
      {/* <Header /> */}

      <Routes> {/* It defines the routing rules. Acts as a container for all our individual <Route> definitions */}
        {/* (!) Map over our appRoutes Array of Objects to create Route Components */}
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}/>
        ))}
      </Routes>

      {/* TODO: Place a FOOTER here that appears on all pages */}
      {/* <Footer />*/}

    </div>
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
