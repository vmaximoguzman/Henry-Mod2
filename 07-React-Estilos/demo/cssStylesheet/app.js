import React from "react";
import { render } from "react-dom";
import Product from "./src/components/Product.jsx";
import Product2 from "./src/components/Product2.jsx";

const App = () => {
  return (
    <>
      <Product title="Producto 1" price="$100" />
      <Product2 title="Producto 2" price="$500" />
    </>
  );
};

render(<App />, document.getElementById("app"));
