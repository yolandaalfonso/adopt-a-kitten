
import './CatCard.css'
import Button from '../Button/Button';


const Card = ({ titulo = "Gatito", name = "gatito", descripcion = "Descripcion de gatito", imagen }) => {

  return (
    <div className="cat-card">
      <img src={imagen} alt={titulo}  />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <h3 className="text-lg font-bold mt-2">{titulo}</h3>
      <p className="text-sm text-gray-600">{descripcion}</p>
      <Button
        text="Adóptame"
        to="/adopt"
      />
    </div>
  )
}
export default Card






