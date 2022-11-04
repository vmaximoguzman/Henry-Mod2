import React from "react";
import SearchBar from "./SearchBar.jsx";
import styled from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styled.nav}>
      <SearchBar onSearch={props.onSearch}></SearchBar>
    </div>
  );
}
