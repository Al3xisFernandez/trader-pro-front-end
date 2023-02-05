import ContactoForm from "./ContactoForm";

function Contactenos() {
  return (
    
      <div className="div-contacto flex-md-column flex-lg-row">
        <div className="contacto-datos-wrapper">
          <h2>TELÉFONO</h2>
          <p>1233456</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.5936500930575!2d-77.03791532070879!3d38.89683196860054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7a33541f55d%3A0xcc73440b2a3c01f0!2sWhite%20House%20Basketball%20Court!5e0!3m2!1ses!2sar!4v1675098623983!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-div">
          <ContactoForm/>
        </div>
      </div>
    
  );
}

export default Contactenos;
