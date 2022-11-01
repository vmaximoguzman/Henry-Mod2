import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.card}>
      <button onClick={props.onClose} className={style.click}>
        X
      </button>
      <img src={props.image} alt="img" />
      <h2 className={style.name}>{props.name}</h2>
      <div className={style.speGen}>
        <h2 className={style.text}>{props.species}</h2>
        <h2 className={style.text}>{props.gender}</h2>
      </div>
    </div>
  );
}
