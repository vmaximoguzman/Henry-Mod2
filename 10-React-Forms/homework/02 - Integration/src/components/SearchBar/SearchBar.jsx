import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const nombre = (evento) => {
    setCharacter(evento.target.value);
  };

  return (
    <div className={style.busca}>
      <input type="search" className={style.agregar} onChange={nombre} />
      <button
        onClick={() => {
          props.onSearch(character);
        }}
        onSearch={character}
        value={character}
        className={style.boton}
      >
        Agregar
      </button>
    </div>
  );
}
