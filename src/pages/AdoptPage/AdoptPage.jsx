import React from 'react'
import catConstructor from '../../assets/catConstruction.png'
import Button from '../../components/Button/Button'
import "./AdoptPage.css"

// Page you will be redirected to after clicking the "Adopt Me!" button.
// CURRENTLY UNDER CONSTRUCTION!
export const AdoptPage = () => {
  return (
    <div className='div-gato-const'>
      <img src={catConstructor} alt='under construction!' width="400" height="400"></img>
       
        
        <Button text='Go Back' />
    </div>
  )
}

export default AdoptPage