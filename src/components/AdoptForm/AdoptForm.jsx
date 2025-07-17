import React, { useState } from "react";
import Modal from "../Modal/Modal"
import "./AdoptForm.css"
import { useTranslation } from 'react-i18next'

const AdoptForm=()=>{
const { t} = useTranslation();
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
      newErrors.name = t('form.error.name') 
    }
    if (!regex.email.test(formData.email)) {
      newErrors.email = t('form.error.email')
    }
    if (!regex.phone.test(formData.phone)) {
      newErrors.phone = t('form.error.phone')
    }
    if (!regex.message.test(formData.message)) {
      newErrors.message =t('form.error.message') 
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
      <h2>{t('form.titulo')}</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="adopt-form__group">
          <label>{t('form.nombre')}</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="adopt-form__error">{errors.name}</span>}
        </div>

        <div className="adopt-form__group">
          <label>{t('form.email')}</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="adopt-form__error">{errors.email}</span>}
        </div>

        <div className="adopt-form__group">
          <label>{t('form.phone')}</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="adopt-form__error">{errors.phone}</span>}
        </div>

        <div className="adopt-form__group">
          <label>{t('form.message')}</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <span className="adopt-form__error">{errors.message}</span>}
        </div>

        <button type="submit" className="adopt-form__submit">{t('form.send')}</button>
      </form>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3>{t('form.enviado')}</h3>
        <p>{t('form.gracias')} 😻🐾</p>
      </Modal>
    </div>
    
  )
}

export default AdoptForm
