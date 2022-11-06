import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.boton}>
        <button onClick={props.onClose} className={style.click}>
          X
        </button>
      </div>
      <img src={props.image} alt="img" className={style.image} />
      <Link to={`/detail/${props.detailId}`}>
        <h5 className={style.name}>{props.name}</h5>
      </Link>

      <div className={style.speGen}>
        <h2 className={style.text}>Species: {props.species}</h2>
        <h2 className={style.text}>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
