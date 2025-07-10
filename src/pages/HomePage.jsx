import React, {useState,useEffect} from "react";
import CatsSlider from  '../components/CatsSlider/CatsSlider'; 
import Button from "../components/Button/Button";
import Card from "../components/CatCard/CatCard";
import { fetchCatsWithBreeds } from "../services/catService";

// TODO: Import CSS Styles.

// Home Page that introduces the project and allows you to navigate to the kitten slider (CatsSlider.jsx).



export const HomePage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const loadCats = async () => {
      const catData = await fetchCatsWithBreeds(5);
      //const urls = catData.map(cat => cat.url);
      setImageUrls(catData);
    };

    loadCats();
  }, []);
  return (
    <div className="home-container">
<Card
  imagen={imageUrls[0]?.url}
  titulo={imageUrls[0]?.breeds?.[0]?.name}
  descripcion={imageUrls[0]?.breeds?.[0]?.description || "Sin descripción disponible."}
/>
        <h1 className="home-title">Welcome to our <u>under-construction</u> "Adopt a Kitten" app 😺</h1>
        <p>You are currently on <code>HomePage.jsx</code></p>
        <p>Explore adorable kittens and consider adopting one 🐈</p>
        <CatsSlider /> {/* The Slider Component can be place here */}
        <Button text="Adopta un gatito🐱" to="/adopt"/> 
        <Button text="Ver todos" to="/cats"/> 
    </div>
  )
}

export default HomePage