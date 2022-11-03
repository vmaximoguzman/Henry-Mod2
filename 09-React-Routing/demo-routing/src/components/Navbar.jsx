import React from "react";
import { NavLink } from "react-router-dom";
import style from "./estilos.module.css";

const Navbar = (props) => {
  return (
    <>
      <h4>Soy el componente Navbar</h4>
      <NavLink to="/about" activeClassName={style.active}>
        About |
      </NavLink>
      <NavLink to="/contacto" activeClassName={style.active}>
        | Contact
      </NavLink>
    </>
  );
};

export default Navbar;
