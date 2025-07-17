// src/components/CatCard/CatCard.jsx
import React from 'react';
import './CatCard.css'
import Button from '../Button/Button';

const Card = ({cat, isFavorite, onToggleFavorite}) => {
  // Destructure properties from the 'cat' Object directly for cleaner access.
  const { url: image, breeds } = cat;

  const name = breeds?.[0]?.name || 'A Kitten!';
  const title = breeds?.[0]?.temperament || 'An adorable kitten!';
  const description = breeds?.[0]?.description || 'Description not available!';

  // Function to handle the favorite toggle
  const handleToggle = () => {
    // Pass the full 'cat Object' to the 'onToggleFavorite' function
    // The parent component (CatsSlider) will then dispatch the appropriate action.
    onToggleFavorite(cat);
  };

  return (
    <div className="cat-card">
      {/* Favorite Button/Icon */}
      <div className="favorite-button-container" onClick={handleToggle}>
        {/* Placeholder for favorite icon. //TODO: Replace this with SVG icons */}
        {isFavorite ? (
          <span style={ { cursor: 'pointer', color: 'red', fontSize: '24px'} }>❤️</span>
        ):(
          <span style={ {cursor: 'pointer', color: 'gray', fontSize: '24px'} }>🤍</span>
        )}
      </div>
      
      <img className="cat-card__image" src={image} alt={name} /> {/* Use 'name' for alt text */}
      <h3 className="cat-card__name">{name}</h3>
      <h3 className="cat-card__title">{title}</h3>
      <p className="cat-card__description">{description}</p>


      <div className="cat-card__button-container">
        <Button
          text="Adóptame"
          to="/adopt"
        />
      </div>
    </div>
  )
}
export default Card;







