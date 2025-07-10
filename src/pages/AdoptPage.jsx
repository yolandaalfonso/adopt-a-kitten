import React from 'react'
import catConstructor from '../assets/catConstruction.png'
import Button from '../components/Button/Button'

// Page you will be redirected to after clicking the "Adopt Me!" button.
// CURRENTLY UNDER CONSTRUCTION!
export const AdoptPage = () => {
  return (
    <div>
      <img src={catConstructor} alt='under construction!' width="300" height="300"></img>
        <h2>Thank you for wanting to adopt a kitten! 🙏</h2>
        <p>You are currently on <code>AdoptPage.jsx</code></p>
        <p>This page is currently under construction! You will soon be able to complete the adoption form. 🤗</p>
        <Button text='Go Back' />
    </div>
  )
}

export default AdoptPage