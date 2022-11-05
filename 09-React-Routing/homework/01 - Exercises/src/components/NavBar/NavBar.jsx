import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <NavLink to={"/"}>
          <li>
            <img src={logoHenry} alt="logo-henry" />
            <img src={logo} alt="logo" />
          </li>
        </NavLink>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <NavLink to={"/shipping"}>
            <li>
              <span>Navieras</span>
            </li>
          </NavLink>
          <NavLink to={"/promotions"}>
            <li>
              <span>Promociones</span>
            </li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}
