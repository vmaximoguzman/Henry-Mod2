import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.divTot}>
      <div className={style.divTxt}>
        <h1 className={style.txtH1}>NOMBRE: {character.name}</h1>
        <h3 className={style.txt}>STATUS: {character.status}</h3>
        <h3 className={style.txt}>ESPECIE: {character.species}</h3>
        <h3 className={style.txt}>GÉNERO: {character.gender}</h3>
        <h3 className={style.txt}>ORIGEN: {character.origin?.name}</h3>
      </div>
      <div className={style.divImg}>
        <img src={character.image} alt={character.name} className={style.img} />
      </div>
    </div>
  );
}
