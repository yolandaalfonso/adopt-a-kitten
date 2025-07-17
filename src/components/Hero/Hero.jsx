import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t} = useTranslation();
  return (
    <div className="hero">
      <h1 className="hero__title">MiauMatch</h1>
      <h3 className="hero__subtitle">
        {t('hero.message1')}<br />
        {t('hero.message2')}
      </h3>
    </div>
  );
};

export default Hero;
