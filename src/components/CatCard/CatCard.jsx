// Individual card showing the kitten's image and the adoption button.import React from 'react'
import './CatCard.css'
//import Botoncito from '../botoncito/Botoncito'
import Button from '../Button/Button';



const Card = ({ titulo = "Gatito", descripcion = "Descripcion de gatito", imagen, color = "white" }) => {
  return (
    <div className='card' style={{ backgroundColor: color }} >
      <img className="imageCard" src={imagen ? imagen : "./src/img/heart.svg"} alt="imagen" />
      <h2>{titulo}</h2><br />
      <p>{descripcion}</p>
      <Button
        text="Adóptame"
        
        to="/adopt"
      />
    </div>
  )
}

export default Card
