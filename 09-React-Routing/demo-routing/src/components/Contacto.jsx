import React from "react";
import { useParams } from "react-router";

const Contacto = ({ match, history, location }) => {
  console.log(match);
  console.log(history);
  console.log(location);

  const params = useParams();
  return (
    <>
      <h3>Soy el componente Contacto</h3>
      <p>Estoy recibiendo por URL el param {params.id}</p>
    </>
  );
};

export default Contacto;
