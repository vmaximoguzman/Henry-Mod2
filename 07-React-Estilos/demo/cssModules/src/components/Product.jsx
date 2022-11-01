import React from "react";
import style from "./Product.css";

function Product(props) {
  return (
    <div className={`${style.producto} ${style.hola}`}>
      <h3 className={style.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
