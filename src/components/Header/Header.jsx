import React, { useState, useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => setMenuOpen(!menuOpen);

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
                        <li className="header__menu-item"><a href="#" onClick={() => setMenuOpen(false)}>INICIO</a></li>
                        <li className="header__menu-item"><a href="#" onClick={() => setMenuOpen(false)}>ADOPTA</a></li>
                        <li className="header__menu-item"><a href="#" onClick={() => setMenuOpen(false)}>FAVORITOS</a></li>
                        <li className="header__menu-item"><a href="#" onClick={() => setMenuOpen(false)}>NOTICIAS</a></li>
                        <li className="header__menu-item"><a href="#" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
                    </ul>
                </div>

                <div className="header__theme-toggle">
                    <button className="header__theme-button" onClick={toggleTheme}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
