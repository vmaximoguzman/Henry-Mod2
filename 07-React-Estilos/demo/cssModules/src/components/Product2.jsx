import React from "react";
import style from "./Product2.css"; //ES IMPORTANTE QUE SEPAMOS DE QUÉ ESTAMOS HABLANDO AL HACER CÓDIGO (Lo mismo cuando hacemos e con element).

function Product2(props) {
  return (
    <div className={`${style.producto} ${style.hola}`}>
      <h3 className={style.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product2;
