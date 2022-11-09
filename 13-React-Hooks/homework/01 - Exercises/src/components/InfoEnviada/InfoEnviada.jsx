import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const InfoEnviada = () => {
  const [informacion, setInformacion] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const { formulario } = useSelector((state) => {
    return state;
  });

  React.useEffect(() => {
    setInformacion({ ...informacion, formulario });
  }, [formulario]);

  return (
    <div>
      <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
      <h3>{formulario.nombre}</h3>
      <h3>{formulario.email}</h3>
      <h3>{formulario.asunto}</h3>
      <h3>{formulario.mensaje}</h3>
    </div>
  );
};

export default InfoEnviada;
