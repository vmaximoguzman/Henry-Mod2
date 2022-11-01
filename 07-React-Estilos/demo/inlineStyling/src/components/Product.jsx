import React from "react";

const divStyle = {
  backgroundColor: "red", //No se le puede poner un guión al nombre de la propiedad de un obj (Cambiamos por camelCase).
  color: "white",
  width: "100px",
  borderRadius: "5px",
};

function Product(props) {
  return (
    <div style={divStyle}>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
