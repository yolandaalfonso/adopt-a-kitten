import React, { useEffect, useRef, useState } from "react";
import { fetchCatsWithBreeds } from "../../services/catService";
import CatCard from "../CatCard/CatCard";
import "./CatsSlider.css"; // Asegúrate de tener un archivo CSS para estilos adicionales
import { useFavorites } from "../../context/useFavorites"; // Import our custom hook to access the favorites context

export const CatsSlider = () => {
  const carouselRef = useRef(null);
  const [images, setImages] = useState([]);

  // Use our custom hook to get the 'favorites state' and 'dispatch function'
  const { favorites, dispatch } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      const cats = await fetchCatsWithBreeds(10);
      console.log(cats); // TODO: TO_DEL - ONLY FOR TESTING!
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

  /**
   * Function to handle toggling favorite status.
   * Check if the cat is already in favorites.
   * @param {Object} catToToggle
   */
  const handleToggleFavorite = (catToToggle) => {
    const isCurrentlyFavorite = favorites.some(
      (favCat) => favCat.id === catToToggle.id
    );

    if (isCurrentlyFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: catToToggle });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: catToToggle });
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <div ref={carouselRef} className="carousel">
          {images.map((cat, index) => {
            // Determine if the current cat is in the 'favorites list'
            const isFavorite = favorites.some((favCat) => favCat.id === cat.id);

            return (
              <CatCard
                key={cat.id || index} // Use cat.id as key if available, fallback to index
                cat={cat} // Pass the entire 'cat object'
                isFavorite={isFavorite} // Pass the favorite status
                onToogleFavorite={handleToggleFavorite} // Pass the toggle function
              />
            );
          })}
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
