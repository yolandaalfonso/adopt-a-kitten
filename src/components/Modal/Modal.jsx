import React from 'react'
import Button from '../Button/Button'
import './Modal.css'

const Modal = ({ show, onClose, children }) => {
  if (!show) return null

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        {children}
        <Button text='Cerrar' to='/'/>
      </div>
    </div>
  )
}

export default Modal