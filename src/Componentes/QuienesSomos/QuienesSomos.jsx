import React from "react";

const QuienesSomos = (props) => {
  return (
    <>
      <section>
        <div className="animation-area">
          <div className="row d-flex justify-content-center align-items-center pt-3 pb-3 flex-wrap qs-div w-100">
            <div className="col-11 col-lg-5 img-wrapper">
              <img
                src={require("../../images/la-mejor-academia-de-trading-de-la-historia.jpg")}
                alt="TRADER PRO"
              />
            </div>
            <div className="col-11 col-lg-6 text-qs">
              <h1>QUIENES SOMOS</h1>
              <p>
                Somos una academia de trading especializada en brindar educación
                y capacitación para personas interesadas en el mercado
                financiero. Ofrecemos cursos en línea y presenciales para todos
                los niveles de habilidad, desde principiantes hasta traders
                profesionales.
              </p>
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

      <section className="row justify-content-center align-items-center qs-section pt-5">
        <div className="col-6 ">
          <img
            src={require("../../images/trader-inmortalcrypto.jpg")}
            alt="TRADER PRO"
            className="img-100"
          />
        </div>
        <p className="col-4 text-center">
          ¿Estás interesado en el trading pero no sabes por dónde empezar?
          ¿Quieres mejorar tus habilidades y conocimientos en este campo para
          obtener mejores resultados? Este curso es para ti.
          <br />
          <br />
        </p>
      </section>
      <section className="row justify-content-center align-items-center qs-section">
        <p className="col-6 text-center">
          Al finalizar el curso, los participantes tendrán una comprensión
          profunda de los conceptos y estrategias de trading, así como la
          confianza y las habilidades necesarias para aplicarlas en el mundo
          real. Podrán analizar de manera efectiva los mercados financieros y
          tomar decisiones informadas de inversión. Desarrollarán su propia
          estrategia de trading y serán capaces de evaluar y mejorar su
          desempeño.
        </p>
        <div className="col-4 ">
          <img
            src={require("../../images/doodle2.png")}
            alt="TRADER PRO"
            className="img-100"
          />
        </div>
        <div className="imgprofile">
          <h3>Nuestro Equipo : </h3>
          <img src={require("../../images/perfi1.jpg")} alt="#" />
          <div>
            <h3>Alexis Fernandez</h3>
            <p>Desarrollador web Full Stack </p>
          </div>

          <img src={require("../../images/perfil2.png")} alt="#" />
          <div>
            <h3>Pablo Ceccarelli</h3>
            <p>Desarrollador web Full Stack </p>
          </div>
          <img src={require("../../images/perfil3.jpg")} alt="#" />
          <div>
            <h3>Lautaro Santillan</h3>
            <p>Desarrollador web Full Stack </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuienesSomos;
