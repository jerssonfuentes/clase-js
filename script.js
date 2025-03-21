function validarDelimitadores() {
    const expresion = document.getElementById("expression").value;
    const resultadoElement = document.getElementById("resultado");
  
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
  

    if (esEquilibrada(expresion)) {
      resultadoElement.textContent = "✅ La expresión está equilibrada.";
      resultadoElement.style.color = "green";
    } else {
      resultadoElement.textContent = "❌ La expresión NO está equilibrada.";
      resultadoElement.style.color = "red";
    }
  }