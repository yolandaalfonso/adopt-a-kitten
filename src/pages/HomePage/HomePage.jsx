import React, { useContext } from "react"; 
import { ThemeContext } from "../../context/ThemeContext";
import CatsSlider from "../../components/CatsSlider/CatsSlider.jsx"
import Button from "../../components/Button/Button.jsx";
import Hero from "../../components/Hero/Hero.jsx"
import Testimonios from "../../components/Testimonios/Testimonios.jsx"
import Proceso from "../../components/Proceso/Proceso.jsx";
// TODO: Import CSS Styles.

// Home Page that introduces the project and allows you to navigate to the kitten slider (CatsSlider.jsx).
export const HomePage = () => {
  const { theme } = useContext(ThemeContext); // 👈 accedemos al tema

  return (
    <div className={`home-container ${theme}`}>
        <Hero></Hero>
        <CatsSlider /> {/* The Slider Component can be place here */} 
        <Proceso></Proceso>
        <Testimonios></Testimonios>
    </div>
  )
}

export default HomePage