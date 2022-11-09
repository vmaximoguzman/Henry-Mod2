import React, { useState } from "react";
import { enviarForm } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (evento) => {
    setForm({ ...form, [evento.target.name]: evento.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(enviarForm({ ...form }));
    return enviarForm();
  };

  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput}></input>
      <input name="email" onChange={handleInput}></input>
      <input name="asunto" onChange={handleInput}></input>
      <input name="mensaje" onChange={handleInput}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
