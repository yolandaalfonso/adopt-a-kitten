import React from 'react'
import './Testimonios.css'
import test1Img from '../../assets/test1.jpg';
import test2Img from '../../assets/test2.jpg';
import test3Img from '../../assets/test3.jpg';
import test4Img from '../../assets/test4.jpg';
import test5Img from '../../assets/test5.jpg';

const Testimonios = () => {
  return (
    <div>
        <h3>Testimonios</h3>
        <div className='testimonios'>
            <div className="testimonio">
                <img src={test1Img} alt="" />
                <h4>Anais</h4>
                <p>Adoptar a Nube fue la mejor decisión que podía haber tomado; llena la casa de amor y travesuras.</p>
            </div>
            <div className="testimonio">
                <img src={test2Img} alt="" />
                <h4>Ana</h4>
                <p>Gracias a MiauMacth, encontré a mi compañero peludo perfecto: Leo no se separa de mí.</p>
            </div>
            <div className="testimonio">
                <img src={test3Img} alt="" />
                <h4>Aymeé</h4>
                <p>Nunca imaginé cuánto amor podía dar un gatito rescatado; Luna me cambió la vida.</p>
            </div>
            <div className="testimonio">
                <img src={test4Img} alt="" />
                <h4>Gabriel</h4>
                <p>La adopción fue fácil, transparente y ahora tengo un amigo fiel que me espera cada día.</p>
            </div>
            <div className="testimonio">
                <img src={test5Img} alt="" />
                <h4>Alberto</h4>
                <p>Desde que llegó Mimo, no paro de sonreír — ¡es pura alegría en cuatro patas!</p>
            </div>
        </div>

    </div>
  )
}

export default Testimonios