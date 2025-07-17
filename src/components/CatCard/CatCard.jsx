import './CatCard.css'
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next'

const Card = ({ titulo, name = "gatito", descripcion = "Descripcion de gatito", imagen }) => {
    const { t} = useTranslation();
  return (
    <div className="cat-card">
      <img className="cat-card__image" src={imagen} alt={titulo} />
      <h3 className="cat-card__name">{name}</h3>
      <h3 className="cat-card__title">{titulo}</h3>
      <p className="cat-card__description">{descripcion}</p>
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







