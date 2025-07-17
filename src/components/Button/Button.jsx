import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

const Button = ({ text = "Click me", to = "/", disabled = false }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (!disabled) {
      navigate(to)
    }
  }

  return (
    <button
      className={`button${disabled ? ' button--disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
