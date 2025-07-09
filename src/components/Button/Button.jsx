import React from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation.
import './Button.css'
// import CSS STYLES

// Adoption button that redirects to the adoption page.
const Button = ({ text = "Click me", to = "/" }) => {
  return (
    <Link to={to} className="buttonWithProps">
      {text}
    </Link>
  );
};

export default Button