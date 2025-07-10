import React from "react";
import CatsSlider from  '../components/CatsSlider/CatsSlider.jsx'; 
import Button from "../components/Button/Button";
// TODO: Import CSS Styles.

// Home Page that introduces the project and allows you to navigate to the kitten slider (CatsSlider.jsx).
export const HomePage = () => {
  return (
    <div className="home-container">
        <h1 className="home-title">Welcome to our <u>under-construction</u> "Adopt a Kitten" app 😺</h1>
        <p>You are currently on <code>HomePage.jsx</code></p>
        <p>Explore adorable kittens and consider adopting one 🐈</p>
        <CatsSlider /> {/* The Slider Component can be place here */}
        <Button /> {/* Render the "Adopt Me!" Button Component */}
    </div>
  )
}

export default HomePage