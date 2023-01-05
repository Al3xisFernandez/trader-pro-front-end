import React from "react";

const QuienesSomos= (props)=> {
    return (
        <div className='contenedor-QuienesSomos'>
            <h1>TraderPro</h1>
            <br></br>
            <br></br>
            <h4> Este curso está diseñado para brindar a los participantes los conocimientos y habilidades necesarios para iniciarse en el mundo del trading y para desenvolverse con éxito en este campo. A lo largo del curso, los alumnos aprenderán sobre distintos aspectos del trading, como la interpretación de gráficos y estadísticas, la toma de decisiones informadas y la gestión de riesgos.

El curso está dirigido tanto a principiantes como a traders más experimentados que deseen mejorar sus conocimientos y habilidades. Se dividirá en varias lecciones y se utilizarán distintas metodologías de enseñanza, como clases teóricas, ejercicios prácticos y análisis de casos reales.

Al finalizar el curso, los alumnos estarán preparados para operar en el mercado de manera responsable y eficiente, y podrán aplicar lo aprendido a su actividad como traders. ¿Te interesa saber más sobre el contenido del curso? ¡Estoy a tu disposición para brindarte más detalles!</h4>
            <br></br>
            <br></br>

            <ul>
                <li><h4>Adquirir conocimientos y habilidades esenciales para el trading</h4></li>
                <li><h4>Desarrollar habilidades en análisis técnico y fundamental</h4></li>
                <li><h4>Aprender a gestionar el dinero y controlar el riesgo</h4></li>
                <li><h4>Aprender a utilizar herramientas y plataformas de trading</h4></li>
                <li><h4>Obtener una comprensión más profunda del mercado financiero y cómo funciona</h4></li>
                <li><h4>Aprender a formular y seguir un plan de trading</h4></li>
            </ul>


            <img
                src={require('../../images/perfil1.png')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
                <h2 className='nombre-QuienesSomos'>Alexis</h2>
                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
            <img
                className='imagen-QuienesSomos'
                src={require('../../images/perfil2.png')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
            <h2 className='nombre-QuienesSomos'>Pablo</h2>                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
            <img
                className='imagen-QuienesSomos'
                src={require('../../images/perfil3.jpg')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
            <h2 className='nombre-QuienesSomos'>Lautaro</h2>                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
        </div>
    );
}

export default QuienesSomos;



