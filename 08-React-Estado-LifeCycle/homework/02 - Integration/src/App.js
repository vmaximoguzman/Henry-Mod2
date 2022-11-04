import style from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([
    {
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ]);

  function onSearch(character) {
    return fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters((cruz) => cruz.filter((persona) => persona.id !== id));
  };

  return (
    <div className={style.fondo} style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
