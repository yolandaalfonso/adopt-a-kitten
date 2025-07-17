import React from "react"; // We need React to create our Component.
import "./Footer.css"; // Import the CSS file for styling this Component.
// Import .SVG icons
import phoneIcon from '../../assets/whatsapp-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import catFeetsIcon from '../../assets/cat-feets-icon.svg'
import { useTranslation } from 'react-i18next'

/**
 * Footer Component
 *
 * This Componet renders the footer section of the "Adopt a Kitten" application.
 * It includes navigation links organized into columns, copyright information,
 * legal links, and social media icons.
 *
 * The structure is designed to be responsive, stacking content on smaller screens.
 *
 */
export const Footer = () => {
  const { t} = useTranslation();
  

  return (
    // The main footer element. We'll apply general footer styles here.
    <footer className="footer">
      {/* Top section of the footer containing link columns. */}
      <div className="footer-links-container">
        {/* Column 1: About Us (Nosotros [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">{t('footer.nosotros')}</h3>
          <ul className="footer-list">
            <li>
              <a href="#who-we-are" className="footer-link">{t('footer.conocenos')}
                
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link" id="contacto">
                {t('footer.contacto')}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Collaborate (Colabora [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">{t('footer.colabora')}</h3>
          <ul className="footer-list">
                <li>
                    <a href="#adopt" className="footer-link">
                        {t('footer.adopta')}
                    </a>
                </li>
                <li>
                    <a href="#volunterring" className="footer-link">
                        <abbr title="¡Hazte voluntario!">{t('footer.ayuda')}</abbr> {/* TODO: href ? #volunterring : #donations */}
                    </a>
                </li>
          </ul>
        </div>

        {/* Column 3: Learn More (Saber más [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">{t('footer.mas')}</h3>
          <ul className="footer-list">
                <li>
                <a href="#faq" className="footer-link">
                    {t('footer.preguntas')}
                </a>
                </li>
                <li>
                <a href="#news" className="footer-link">
                   {t('footer.noticias')} 
                </a>
                </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <address className="footer-social">
            {/* TODO: Configure Font Awesome icons in index.html or main.jsx or https://docs.fontawesome.com/web/use-with/react */}
              <a
                href="tel:+34984251323"
                className="social-icon"
                arial-label="Phone"
            >
                <img src={phoneIcon} 
	 alt="Phone Logo"/><span className="icon-text">+34 984 251 323</span>
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                arial-label="Instagram"
            >
                <img src={instagramIcon} 
	 alt="Instagram Logo"/><span className="icon-text">@miaumatch</span> 
            </a>
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                arial-label="Facebook"
            >
                <img src={facebookIcon} 
	 alt="facebook Logo"/><span className="icon-text">MiauMatch</span>
            </a>
        </address>
      </div> {/* End of footer-links-container */}

      {/* Bottom section of the footer for copyright, legal, and social media */}
      <div className="footer-bottom">
            {/* Copyright & Legal Links */}
            <div className="footer-legal">
                <p className="footer-copyright">
                    &copy; 2025 MiauMatch <img className="miauMatch-icon" src={catFeetsIcon} 
	 alt="MiauMatch Logo"/>
                </p>
                <span className="footer-separator">|</span>
                <a href="#privacy-policy" className="footer-link">
                    {t('footer.politica')}
                </a>
                <span className="footer-separator">|</span> 
                <a href="#cookie-policy" className="footer-link">
                     {t('footer.cookies')}
                </a>
                <span className="footer-separator">|</span>
                <a href="#miauMatch-dev-team" className="footer-link">
                    {t('footer.desarrollado')}
                </a>
            </div>
      </div> {/* End of footer-bottom */}
    </footer>
  );
};

export default Footer; // Export the Component so it can be used in other files (e.g. App.jsx)
