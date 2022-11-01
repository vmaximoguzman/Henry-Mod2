import React from "react";
import { render } from "react-dom";
import Producto from "./src/components/Product.jsx";
import Product2 from "./src/components/Product2.jsx";
import "./src/global.gcss";

const App = () => {
  return (
    <>
      <Producto title="Prueba" price={400}></Producto>
      <Product2 title="Prueba" price={400}></Product2>
    </>
  );
};

render(<App />, document.getElementById("app"));
