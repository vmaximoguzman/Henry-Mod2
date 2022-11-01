import React from "react";
import "./Product2.css";

const Product2 = (props) => {
  return (
    <div className="producto">
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default Product2;
