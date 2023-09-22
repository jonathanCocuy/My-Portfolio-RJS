import React, { useState } from "react";
import "./StyleContact.css";

const Contact = () => {
  const InitialState = {
    email: "jonathancp145@gmail.com",
    subject: "",
    body: "",
  };

  const [formContact, setFormContact] = useState(InitialState);

  const LoadData = (e) => {
    const { name, value } = e.target;
    setFormContact({
      ...formContact,
      [name]: value,
    });
  };

  const SendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${
      formContact.email
    }?subject=${encodeURIComponent(
      formContact.subject
    )}&body=${encodeURIComponent(formContact.body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="container-principal-contact">
      <div className="container-information">
        <h1>Puedes contactarte conmigo:</h1>
        <p className="contact-paragraph"></p>
      </div>
      <div className="container-two-forms">
        <form onSubmit={SendEmail} className="form-contact">
          <div className="container-contact">
            <div>
              <input
                className="input-contact"
                type="text"
                id="email"
                name="email"
                value={formContact.email}
                onChange={LoadData}
                placeholder="Email"
                required
                disabled
              />
            </div>
            <div>
              <input
                className="input-contact"
                type="text"
                id="subject"
                name="subject"
                value={formContact.subject}
                onChange={LoadData}
                placeholder="Asunto"
                required
              />
            </div>
            <div>
              <textarea
                className="textarea-contact"
                id="body"
                name="body"
                value={formContact.body}
                onChange={LoadData}
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
        <div className="container-whatsapp">WhatsApp</div>
      </div>
    </main>
  );
};

export default Contact;
