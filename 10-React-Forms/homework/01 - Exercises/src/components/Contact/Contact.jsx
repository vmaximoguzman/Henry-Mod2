import React, { useState } from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (evento) => {
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
      [evento.target.email]: evento.target.value,
      [evento.target.phone]: evento.target.value,
      [evento.target.subject]: evento.target.value,
      [evento.target.message]: evento.target.value,
    });

    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value,
        [evento.target.email]: evento.target.value,
        [evento.target.phone]: evento.target.value,
        [evento.target.subject]: evento.target.value,
        [evento.target.message]: evento.target.value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (
      inputs.name &&
      inputs.email &&
      inputs.phone &&
      inputs.subject &&
      inputs.message
    ) {
      alert("Datos completos");
    } else {
      alert("Debes corregir los errores");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre..."
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className="danger">{errors.name}</p>

        <label>Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          placeholder="Escribe tu email..."
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className="danger">{errors.email}</p>

        <label>Teléfono:</label>
        <input
          type="number"
          name="phone"
          placeholder="Escribe un teléfono..."
          value={inputs.phone}
          onChange={handleChange}
          className={errors.phone && "warning"}
        />
        <p className="danger">{errors.phone}</p>

        <label>Asunto:</label>
        <input
          type="text"
          name="subject"
          placeholder="Escribe el asunto..."
          value={inputs.subject}
          onChange={handleChange}
          className={errors.subject && "warning"}
        />
        <p className="danger">{errors.subject}</p>

        <label>Mensaje:</label>
        <textarea
          type="text"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && "warning"}
        />
        <p className="danger">{errors.message}</p>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))
    errors.email = "Debe ser un correo electrónico";
  if (inputs.phone < 0) errors.phone = "Sólo números positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";

  return errors;
}
