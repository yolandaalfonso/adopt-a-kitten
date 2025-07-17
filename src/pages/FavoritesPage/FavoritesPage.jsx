// src/pages/FavoritesPage/FavoritesPage.jsx
import React from "react";
import { useFavorites } from "../../context/useFavorites"; // This import our 'Custom Hook'
import CatCard from "../../components/CatCard/CatCard";
import "./FavoritesPage.css";
import { useTranslation } from 'react-i18next'

/**
 * It should displays all the cats the user has marked as favorites. This page will
 * be similar to 'HomePage' in terms of displaying cards, but it will put data from
 * your 'favorites context' instead of 'fetching new cats'.
 * @returns a 'React Element': a plain object that virtually describes a DOM node.
 */
const FavoritesPage = () => {
  // Access the 'favorites state' and the 'dispatch function' from the 'context'
  const { favorites, dispatch } = useFavorites();
    const { t} = useTranslation();
  /**
   * Re-use the 'handleToggleFavorite' logic from 'CatsSlider' to keep it consistent.
   * This allows users to unfavorite directly from the 'FavoritesPage'.
   *
   * (!) In the 'FavoritesPage', a cat is by definition already a favorite!
   * so we only need to dispatch 'REMOVE_FAVORITE'
   *
   * Function to handle toggling favorite status.
   * Check if the cat is already in favorites.
   * @param {Object} catToToggle
   *
   */
  const handleToggleFavorite = (catToToggle) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: catToToggle });
  };

  return (
    <div className="favorites-page-container">
      <h2 className="favorites-page-title">{t('favTitle')}</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites-message">
         {t('favText')}
        </p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((cat) => {
            console.log("Rendering CatCard for:", cat.id); // TODO: TO_DEL - Good for debugging specific card render
            return (
              <CatCard
                key={cat.id}
                cat={cat}
                isFavorite={true}
                onToggleFavorite={handleToggleFavorite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
