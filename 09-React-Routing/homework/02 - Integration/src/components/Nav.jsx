import React from "react";
import SearchBar from "./SearchBar.jsx";
import styled from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import style from "./NavLink.module.css";

export default function Nav(props) {
  return (
    <div className={styled.nav}>
      <div className={styled.link}>
        <NavLink to="/home" activeClassName={style.about}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={style.about}>
          About
        </NavLink>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch}></SearchBar>
      </div>
    </div>
  );
}
