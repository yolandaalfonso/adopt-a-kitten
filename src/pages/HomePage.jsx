import React from "react";
import CatsSlider from  '../components/CatsSlider/CatsSlider.jsx'; 
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import Testimonios from "../components/Testimonios/Testimonios.jsx";
import Proceso from "../components/Proceso/Proceso.jsx";
// TODO: Import CSS Styles.

// Home Page that introduces the project and allows you to navigate to the kitten slider (CatsSlider.jsx).
export const HomePage = () => {
  return (
    <div className="home-container">
        <Hero></Hero>
        <CatsSlider /> {/* The Slider Component can be place here */}
        <Button text="Adopta un gatito🐱" to="/adopt"/> 
        <Proceso></Proceso>
        <Testimonios></Testimonios>
    </div>
  )
}

export default HomePage