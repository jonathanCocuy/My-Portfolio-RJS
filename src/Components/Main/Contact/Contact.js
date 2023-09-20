import React, { useState } from "react";
import "./StyleContact.css";

const Contact = () => {
  const InitialState = {
    email: "jonathancp145@gmail.com",
    subject: "",
    body: "",
  };
  const [formData, setFormData] = useState(InitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="container-principal-contact">
      <div className="container-information">
        <h1>Puedes contactarte conmigo:</h1>
        <p className="contact-paragraph"></p>
      </div>
      <form onSubmit={SendEmail} className="form-contact">
        <div className="container-contact">
          <div>
            <input
              className="input-contact"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              className="input-contact"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              required
            />
          </div>
          <div>
            <textarea
              className="textarea-contact"
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
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
