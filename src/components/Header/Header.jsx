import React, { useState, useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="header-nav">
            <div className="nav-container">
                <a href="#" className="logo-link">
                    <img className="logo" src={theme === 'dark' ? '/MiauMatch-dark.png' : '/MiauMatch.png'} alt="logo MiauMatch" />
                </a>
                
                <button className="button-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                
                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>INICIO</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>ADOPTA</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>FAVORITOS</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>NOTICIAS</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
                    </ul>
                </div>
            </div>
            <div className="theme-toggle-wrapper">
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
};

export default Header;