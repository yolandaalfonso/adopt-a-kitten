import React from 'react'
import './Testimonios.css'
import test1Img from '../../assets/test1.jpg';
import test2Img from '../../assets/test2.jpg';
import test3Img from '../../assets/test3.jpg';
import test4Img from '../../assets/test4.jpg';
import test5Img from '../../assets/test5.jpg';
import { useTranslation } from 'react-i18next'

const Testimonios = () => {
  const { t} = useTranslation();
  return (
    <section className="testimonios">
      <h3 className="testimonios__title">{t('Testimonios.testimonios')}</h3>
      <div className="testimonios__list">
        <div className="testimonios__item">
          <img className="testimonios__image" src={test1Img} alt="Anais y Nube" />
          <h4 className="testimonios__name">Anais</h4>
          <p className="testimonios__text">{t('Testimonios.testimonio1')}</p>
        </div>
        <div className="testimonios__item">
          <img className="testimonios__image" src={test2Img} alt="Ana y Leo" />
          <h4 className="testimonios__name">Ana</h4>
          <p className="testimonios__text">{t('Testimonios.testimonio2')}</p>
        </div>
        <div className="testimonios__item">
          <img className="testimonios__image" src={test3Img} alt="Aymeé y Luna" />
          <h4 className="testimonios__name">Aymeé</h4>
          <p className="testimonios__text">{t('Testimonios.testimonio3')}</p>
        </div>
        <div className="testimonios__item">
          <img className="testimonios__image" src={test4Img} alt="Gabriel y su gato" />
          <h4 className="testimonios__name">Gabriel</h4>
          <p className="testimonios__text">{t('Testimonios.testimonio4')}</p>
        </div>
        <div className="testimonios__item">
          <img className="testimonios__image" src={test5Img} alt="Alberto y Mimo" />
          <h4 className="testimonios__name">Alberto</h4>
          <p className="testimonios__text">{t('Testimonios.testimonio5')}</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonios;
