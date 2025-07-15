import React, { useEffect, useRef, useState } from "react";
import { fetchCatsWithBreeds } from "../../services/catService";
import CatCard from "../CatCard/CatCard";
import "./CatsSlider.css"; // Asegúrate de tener un archivo CSS para estilos adicionales

export const CatsSlider = () => {
  const carouselRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cats = await fetchCatsWithBreeds(10);
      setImages(cats); // ahora son objetos completos, no solo URLs
    };

    fetchData();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <div ref={carouselRef} className="carousel">
          {images.map((image, index) => (
            <CatCard
              key={index}
              //titulo={image.breeds?.[0]?.temperament || 'Un adorable gatito'}
              name={image.breeds?.[0]?.name || "Gatito"}
              descripcion={
                image.breeds?.[0]?.description || "Descripción no disponible"
              }
              imagen={image.url}
            />
          ))}
        </div>
      </div>

      <div className="buttons-container">
        <button onClick={scrollLeft} className="carousel-button">
          ◀
        </button>
        <button onClick={scrollRight} className="carousel-button">
          ▶
        </button>
      </div>
    </div>
  );
};

export default CatsSlider;
