import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AdoptPage from './pages/AdoptPage'
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
        <Route path="/" element={<HomePage/>}/> {/* Route for the Home Page. When the URL is "/", HomePage Component is shown */}
        <Route path="/adopt" element={<AdoptPage/>}/> {/* Route for the Adoption Page. When the URL is "/adopt", AdoptPage Component is shown */}
      </Routes>

      {/* TODO: Place a FOOTER here that appears on all pages */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
