import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="header-nav">
            <div className="nav-container">
                <a href="#" className="logo-link">
                    <img className="logo" src="../../public/MiauMatch.png" alt="logo MiauMatch" />
                </a>
                
                <button className="button-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                
                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href='/' onClick={() => setMenuOpen(false)}>INICIO</a></li>
                        <li><a href='/adopt' onClick={() => setMenuOpen(false)}>ADOPTA</a></li>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>COLABORA</a></li>
                        <li><a href="https://www.santevet.es/categorias/actualidad-gatos" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>NOTICIAS</a></li>
                        <li><a href="#contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;