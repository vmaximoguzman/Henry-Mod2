import React from "react";
import styled from "styled-components"; //styled-components lo tenemos que agregar (no viene con react) que se puede ver en el package.json. Podemos buscar en internet cómo agregarlo.

const StyledDiv = styled.div`
  border: 1px solid black;
  background-color: salmon;
  width: 300px;
  &:hover {
    background-color: red;
    transition: 0.5s;
  }
`; //Dijimos creame un componente de estilos (Styled Component). En este caso, se pueden utilizar pseudo selectores.
//Al profe no le gusta que le quede mucho código en el componente (A pesar de que crea que igual está bueno), a mí tampoco igual :/.

const OtroDiv = styled.div`
  border: 3px solid blue;
  background-color: grey;
  width: 200px;
`;

const Parrafo = styled.p`
  color: blue;
`;
//Estos se pueden exportar e utilizarlo en otros lados. Al igual que podemos crear un .js donde tendremos los estilos e importarlos a nuestro .jsx.

function Product(props) {
  return (
    <>
      <StyledDiv>
        <h3>{props.title}</h3>
        <Parrafo>{props.price}</Parrafo>
      </StyledDiv>
      {/* //Esto sigue siendo un div, PERO con los estilos agregados. */}
      <OtroDiv>
        <h3>{props.title}</h3>
        <Parrafo>{props.price}</Parrafo>
      </OtroDiv>
    </>
  );
}

export default Product;
