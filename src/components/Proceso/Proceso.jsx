import React from 'react';
import './Proceso.css';
import procesoImg from '../../assets/proceso.png';

const Proceso = () => {
  return (
    <section className="proceso">
      <h3 className="proceso__title">¿Cómo es el proceso?</h3>
      <div className="proceso__content">
        <div className="proceso__image-container">
          <img
            className="proceso__image"
            src={procesoImg}
            alt="Proceso de adopción"
          />
        </div>
        <div className="proceso__steps">
          <ol className="proceso__list">
            <li className="proceso__step">Elige a tu futuro gatito.</li>
            <li className="proceso__step">Rellena el formulario de adopción.</li>
            <li className="proceso__step">
              Charlamos contigo para asegurarnos de que haya un match perfecto.
            </li>
            <li className="proceso__step">
              ¡Adopta y comienza una nueva aventura juntos!
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
