import React from "react";

const QuienesSomos = (props) => {
  return (
    <>
      <section>
        <div className="animation-area">
          <div className="row justify-content-center align-items-center">
            <div className="col-5 img-wrapper">
              <img src={require("../../images/dalle.png")} alt="TRADER PRO" />
            </div>
            <div className="col-5 ">
              <h1>QUIENES SOMOS</h1>
              <p>Somos una escuela de trading especializada en brindar educación y capacitación para personas interesadas en el mercado financiero. Ofrecemos cursos en línea y presenciales para todos los niveles de habilidad, desde principiantes hasta traders profesionales.</p>
            </div>
          </div>

            <div className="bubble"></div>
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
      </section>

      <section className="row justify-content-center align-items-center qs-section">
        <div className="col-6 ">
          <img src={require("../../images/doodle1.png")} alt="TRADER PRO" className="img-100"/>
        </div>
        <p className="col-4 text-center">Descubre los secretos de la criptomoneda: domina el mercado en nuestra clase magistral exclusiva. </p>
      </section>
      <section className="row justify-content-center align-items-center qs-section">
        <p className="col-6 text-center">Aprende a invertir con éxito en el mundo cripto </p>
        <div className="col-4 ">
          <img src={require("../../images/doodle2.png")} alt="TRADER PRO" className="img-100"/>
        </div>
      </section>
    </>
  );
};

export default QuienesSomos;
