import React, { useState } from "react";
import "./StyleContact.css";

const Contact = () => {
  const InitialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formContact, setformContact] = useState(InitialForm);

  const ChangeContact = (e) => {
    const { name, value } = e.target;
    setformContact({
      ...formContact,
      [name]: value,
    });
  };

  const Change = (e) => {
    e.preventDefault();
    console.log("Formulario Enviado", formContact);
    alert("Formulario Enviado");
    setformContact(InitialForm);
  };

  return (
    <main className="container-principal-contact">
      <div className="container-information">
        <h1>Puedes enviarme un mensaje</h1>
        <p className="contact-paragraph"></p>
      </div>
      <form onSubmit={Change} className="form-contact">
        <div className="container-contact">
          <div>
            <input
              className="input-contact"
              type="text"
              id="name"
              name="name"
              value={formContact.name}
              onChange={ChangeContact}
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <input
              className="input-contact"
              type="email"
              id="email"
              name="email"
              value={formContact.email}
              onChange={ChangeContact}
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div>
            <textarea
              className="textarea-contact"
              id="message"
              name="message"
              value={formContact.message}
              onChange={ChangeContact}
              placeholder="Mensaje"
              required
            />
          </div>
        </div>
        <div className="container-button-contact">
          <button className="button-contact" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
