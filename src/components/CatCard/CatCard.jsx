// src/components/CatCard/CatCard.jsx
import React from 'react';
import './CatCard.css'
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next'

const Card = ({ titulo, name = "gatito", descripcion = "Descripcion de gatito", imagen }) => {
    const { t} = useTranslation();
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
          text={t('adopt')}
          to="/adopt"
        />
      </div>
    </div>
  )
}
export default Card;







