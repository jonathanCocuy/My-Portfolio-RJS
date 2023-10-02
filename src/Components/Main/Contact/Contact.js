import React, { useState } from "react";
import "./StyleContact.css";
import sweetAlert from "sweetalert";

const Contact = () => {
  const InitialState = {
    email: "jonathancp145@gmail.com",
    subject: "",
    body: "",
  };

  const [formContact, setFormContact] = useState(InitialState);
  const [WhatsAppMessage, setWhatsAppMessage] = useState("");

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

    setFormContact(InitialState);
  };

  const SendWhatsAppMsg = (event) => {
    setWhatsAppMessage(event.target.value);
  };

  const WhatsApp = () => {
    const MessageInput = encodeURIComponent(WhatsAppMessage);

    if (WhatsAppMessage.trim() === '') {
      sweetAlert("Oops...", "Debes completar el campo", "error");
            return;
    }
    const WhatsAppLink = `https://api.whatsapp.com/send?phone=3058754602&text=${MessageInput}`;
    window.open(WhatsAppLink, "_blank");
    setWhatsAppMessage("");
  };

  return (
    <main className="container-principal-contact">
      <h3 className="title-contact">¿Deseas contactarte conmigo?</h3>
      <div className="container-two-forms">
        <form onSubmit={SendEmail} className="form-contact">
          <div className="container-contact">
            <h1 className="write-title">Escribeme a mi Correo</h1>
            <img
            className="img-form"
              src="https://images.prismic.io/vtiger-website/1a36a136-5f88-4313-8dd4-a6fc2c397893_gmail+logo.png?auto=compress,format"
              width={"50"}
              alt="Gmail Logo"
            />
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

        <div className="container-whatsapp" >
          <div className="container-whatsapp-input">
            <h1 className="write-title">Escribeme a mi WhatsApp</h1>
            <img
            className="img-whatsapp"
              src="https://www.joseivanaguilar.com/wp-content/uploads/2023/05/WhatsApp.svg_.png"
              width={"50"}
              alt="WhatsApp Logo"
            />
            <textarea
              className="textarea-whatsapp"
              id="whatsApp"
              type="text"
              value={WhatsAppMessage}
              onChange={SendWhatsAppMsg}
              placeholder="Escribe tu mensaje"
              required
            />
          </div>
          <div>
            <button className="button-whatsapp" onClick={WhatsApp}>Enviar</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
