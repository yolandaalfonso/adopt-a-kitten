import React, { useState, useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next'


const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => setMenuOpen(!menuOpen);
      const handleChange = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <nav className="header">
            <div className="header__container">
                <a href="#" className="header__logo-link">
                    <img
                        className="header__logo"
                        src={theme === 'dark' ? '/MiauMatch-dark.png' : '/MiauMatch.png'}
                        alt="logo MiauMatch"
                    />
                </a>

                <button className="header__toggle-button" onClick={toggleMenu}>
                    ☰
                </button>

                <div className={`header__menu ${menuOpen ? 'header__menu--open' : ''}`}>
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><a href="/" onClick={() => setMenuOpen(false)}>{t('header.inicio')}</a></li>
                        <li className="header__menu-item"><a href="/adopt" onClick={() => setMenuOpen(false)}>{t('header.adopta')}</a></li>
                        <li className="header__menu-item"><a href="/favorites" onClick={() => setMenuOpen(false)}>{t('header.favoritos')}</a></li>
                        <li className="header__menu-item"><a href="https://www.santevet.es/categorias/actualidad-gatos" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('header.noticias')}</a></li>
                        <li className="header__menu-item"><a href="#contacto" onClick={() => setMenuOpen(false)}>{t('header.contacto')}</a></li>
                    </ul>
                </div>

                <div className="header__theme-toggle">
                    <button className="header__theme-button" onClick={toggleTheme}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
                <div className="lang-switcher">
                  <button className="lang-switcher__button" onClick={() => handleChange('es')}>ES</button>
                  <button className="lang-switcher__button" onClick={() => handleChange('en')}>EN</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
