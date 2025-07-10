import React, { useState, useEffect } from "react";
import Card from "../components/CatCard/CatCard";
import "../App.css"
import { fetchCatsWithBreeds } from "../services/catService";



export const ShowCatsPage=()=>{
    const [cats, setCats] = useState([]); 
    useEffect(() => {
    const loadCats = async () => {
      const catData = await fetchCatsWithBreeds(15);
      setCats(catData);
    };

    loadCats();
  }, []);
    return(
      <div className="cat-grid">
         {cats.map((cat)=>(
            <Card key={cat.id}
            imagen={cat.url} 
            titulo={cat.breeds[0]?.name|| "Raza desconocida"}
            descripcion={cat.breeds[0]?.description|| "Sin descripción"}
            
            />
         ))}
      </div>
    );
    };
