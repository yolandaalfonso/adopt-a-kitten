import React, { useState } from "react";
import Modal from "../Modal/Modal"
import "./AdoptForm.css"

const AdoptForm=()=>{
const [formData, setFormData]=useState(
    {
        name:"",
        email:"",
        phone:"",
        message:"",
    }
);
const [errors, setErrors]=useState({});
const [showModal, setShowModal] = useState(false)

const regex = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{7,15}$/,
    message: /^.{10,300}$/,
  }
  const validate = () => {
    const newErrors = {}

    if (!regex.name.test(formData.name)) {
      newErrors.name = 'Nombre inválido. Solo letras y espacios (2-50 caracteres).'
    }
    if (!regex.email.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido.'
    }
    if (!regex.phone.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido. Solo números (7-15 dígitos).'
    }
    if (!regex.message.test(formData.message)) {
      newErrors.message = 'El mensaje debe tener entre 10 y 300 caracteres.'
    }

    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
         } else {
      setErrors({})
      setShowModal(true)
      setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
})
    }
  }

return (
    <div className="adopt-form">
      <h2>Formulario de Adopción</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="adopt-form__group">
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="adopt-form__error">{errors.name}</span>}
        </div>

        <div className="adopt-form__group">
          <label>Correo electrónico:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="adopt-form__error">{errors.email}</span>}
        </div>

        <div className="adopt-form__group">
          <label>Teléfono:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="adopt-form__error">{errors.phone}</span>}
        </div>

        <div className="adopt-form__group">
          <label>Mensaje:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <span className="adopt-form__error">{errors.message}</span>}
        </div>

        <button type="submit" className="adopt-form__submit">Enviar</button>
      </form>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3>¡Enviado correctamente!</h3>
        <p>Gracias por tu interés en adoptar 😻🐾</p>
      </Modal>
    </div>
    
  )
}

export default AdoptForm
