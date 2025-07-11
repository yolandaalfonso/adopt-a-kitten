import React from 'react'
import './Proceso.css'
import procesoImg from '../../assets/proceso.png';

const Proceso = () => {
  return (
    <div>
        <h3>¿Cómo es el proceso?</h3>
        <div className="proceso-section">
            <div className="imagen">
                <img src={procesoImg} alt="Proceso de adopcion" />
            </div>
            <div className="proceso">
            <ol>
                <li>Elige a tu futuro gatito.</li>
                <li>Rellena el formulario de adopción.</li>
                <li>Charlamos contigo para asegurarnos de que haya un match perfecto.</li>
                <li>¡Adopta y comienza una nueva aventura juntos!</li>
            </ol>
            </div>
        </div>

    </div>
  )
}

export default Proceso