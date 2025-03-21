function esEquilibrada(expresion) {
  const pila = [];
  const delimitadores = { "(": ")", "{": "}", "[": "]" };

  for (let caracter of expresion) {
    if (delimitadores[caracter]) {
    
      pila.push(caracter);
    } else if (Object.values(delimitadores).includes(caracter)) {
    
      if (pila.length === 0 || delimitadores[pila.pop()] !== caracter) {
        return false;
      }
    }
  }

  return pila.length === 0;
}
function validarDelimitadores() {
    const expresion = document.getElementById("expression").value;
    const resultadoElement = document.getElementById("resultado");
    console.log(esEquilibrada(expresion));
    if (esEquilibrada(expresion)) {
      resultadoElement.innerText = " La expresión está equilibrada.";
    } else {
      resultadoElement.innerText = " La expresión NO está equilibrada.";
    }
  }