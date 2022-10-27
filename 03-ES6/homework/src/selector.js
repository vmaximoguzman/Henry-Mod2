var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    
    resultSet = [...resultSet, ...result];
  }

  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === ".") return "class";

  if (selector[0] === "#") return "id";
  
  if (selector.includes(".")) return "tag.class";

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;

    if (selectorType === "id") { 
      matchFunction = (e) => "#" + e.id === selector //e es un elemento del HTML. Entonces, preguntamos si el id del e es igual al que se nos pasó. Pero, tenemos que recordar que el selector pasa con numeral. Entonces le agregamos un # a e.id (más fácil que sacarle el # a selector). Buscamos retornar si da true o si da false (no necesitamos el if), es decir, el resultado de la comparación (Recordar también que, con función flecha, no necesitamos el return). Al comparar, siempre va a devolver un booleano.

    } else if (selectorType === "class") {
      matchFunction = (e) => {
        for (const cls of e.classList) { //cls es cada clase (cada nombre de clase que hay en una class). Ve la lista de clases (Que son todos los nombres de las clases (Es una lista de la clases que alberga un elemento HTML)). Podemos tener muchas clases, entonces debemos de buscar entre todas estas clases (Utilizaremos un for of).
          if ("." + cls === selector) return true;

        }
        return false;

      }

    } else if (selectorType === "tag.class") {
      matchFunction = (e) => {
        const [miTag, miClass] = selector.split("."); //Va a dividir el string por el punto (div.redondo => split(".") => ["div", "redondo"]). Por eso vamos a guardar cada uno de los elementos (Que nos dá split), en las siguientes 2 variables.

        return (matchFunctionMaker(miTag)(e) && matchFunctionMaker("." + miClass)(e)); //Preguntamos al e si es el tag y la clase que necesitamos. Pasando primero el tag, que lo pasará por sTM, que nos dirá que es un tag. Esto lo manda al mFM para preguntar si es un tag (obvio que sí). Entonces activará la función tag (la función de abajo) y la mandará al árbol. Este buscará los tags. También se activará la función class y hará lo mismo. PERO, vamos a decir que, para que me devuelvas el tag (puede haber muchos elementos iguales en el HTML), también tenes que ver que tenga la clase que te paso. Una vez que devuelva esto, vamos a poder decir si es true o es false (Según lo que devuelva la función tag y la función class). Los e siguen siendo los elementos HTML (NO SON 2 PARAMETROS). Lo primero devuelve una función, la cuál ejecutamos con otra función.

      }

    } else if (selectorType === "tag") {
      matchFunction = (e) => {
        return e.tagName.toLowerCase() === selector;

      }

    }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
