import React from "react"; // We need React to create our Component.
import "./Footer.css"; // Import the CSS file for styling this Component.

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
  return (
    // The main footer element. We'll apply general footer styles here.
    <footer className="footer">
      {/* Top section of the footer containing link columns. */}
      <div className="footer-links-container">
        {/* Column 1: About Us (Nosotros [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">Nosotros</h3>
          <ul className="footer-list">
            <li>
              <a href="#who-we-are" className="footer-link">
                Conócenos
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Collaborate (Colabora [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">Colabora</h3>
          <ul className="footer-list">
                <li>
                    <a href="#adopt" className="footer-link">
                        Adopta
                    </a>
                </li>
                <li>
                    <a href="#volunterring" className="footer-link">
                        <abbr title="¡Hazte voluntario!">Échanos una pata</abbr> {/* TODO: href ? #volunterring : #donations */}
                    </a>
                </li>
          </ul>
        </div>

        {/* Column 3: Learn More (Saber más [SP]) */}
        <div className="footer-column">
          <h3 className="footer-column-title">Saber más</h3>
          <ul className="footer-list">
                <li>
                <a href="#faq" className="footer-link">
                    Preguntas frecuentes
                </a>
                </li>
                <li>
                <a href="#news" className="footer-link">
                    Noticias
                </a>
                </li>
          </ul>
        </div>
      </div>{" "}
      {/* End of footer-links-container */}

      {/* Bottom section of the footer for copyright, legal, and social media */}
      <div className="footer-bottom">
            {/* Copyright & Legal Links */}
            <div className="footer-legal">
                <p className="footer-copyright">
                    &copy; 2024 MiauMatch. Todos los derechos reservados.
                </p>
                <div className="footer-legal-links">
                    <a href="#privacy-policy" className="footer-link">
                        Política de privacidad
                    </a>
                    <span className="footer-separator">|</span> {/* Separator for readability */}
                    <a href="#cookie-policy" className="footer-link">
                        Política de cookies
                    </a>
                    <span className="footer-separator">|</span>
                    <a href="legal-notice" className="footer-link">
                        Aviso legal
                    </a>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
                {/* TODO: Configure Font Awesome icons in index.html or main.jsx! */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    arial-label="Instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    arial-label="Facebook"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    arial-label="Twitter"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="YouTube"
                >
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
      </div> {/* End of footer-bottom */}
    </footer>
  );
};

export default Footer; // Export the Component so it can be used in other files (e.g. App.jsx)
