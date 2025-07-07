import React from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation.
// import CSS STYLES

// Adoption button that redirects to the adoption page.
export const Button = () => {
  return (
     //The Link Component creates an accessible link that, when clicked,
     //navigates to the specified "to" path without a full page reload. 
    <Link to="/adopt" className="adopt-button"> {/* className is added for styling purposes! */}
        Adopt Me! 🐧
    </Link> 
  )
}

export default Button