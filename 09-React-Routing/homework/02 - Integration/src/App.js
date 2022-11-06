import style from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

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
      <Route path="/">
        <Nav onSearch={onSearch} />
      </Route>

      <Route exact path="/home">
        <Cards characters={characters} onClose={onClose} />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route path="/detail/:detailId">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
