import React from 'react';
import './Proceso.css';
import procesoImg from '../../assets/proceso.png';
import { useTranslation } from 'react-i18next'

const Proceso = () => {
   const { t} = useTranslation();
  return (
    <section className="proceso">
      <h3 className="proceso__title">{t('proceso.como')}</h3>
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
            <li className="proceso__step">{t('proceso.paso1')}</li>
            <li className="proceso__step">{t('proceso.paso2')}</li>
            <li className="proceso__step">{t('proceso.paso3')}
              
            </li>
            <li className="proceso__step">
             {t('proceso.paso4')} 
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
