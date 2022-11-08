import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "vmaximoguzman@gmail.com";
  const password = "Maria*0912";

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
    }
  }

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
        <Form />
      </Route>

      <Route exact path="/home">
        <Nav onSearch={onSearch} />
        <Cards characters={characters} onClose={onClose} />
      </Route>

      <Route exact path="/about">
        <Nav onSearch={onSearch} />
        <About />
      </Route>

      <Route path="/detail/:detailId">
        <Nav onSearch={onSearch} />
        <Detail />
      </Route>
    </div>
  );
}

export default App;
