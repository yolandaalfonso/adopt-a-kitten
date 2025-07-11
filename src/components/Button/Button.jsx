import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'
// import CSS STYLES

// Adoption button that redirects to the adoption page.
const Button = ({ text = "Click me", to = "/" }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(to)
  }

  return (
    <button className="button-with-props" onClick={handleClick}>
      {text}
    </button>
  )
}


export default Button