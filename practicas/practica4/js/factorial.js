// Función recursiva para calcular el factorial
function factorial(n) {
    if (n < 0) {
      // No está definido para números negativos
      return undefined;
    } else if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElemento = document.getElementById("resultadoFactorial");
  
    if (isNaN(numero)) {
      resultadoElemento.textContent = "Por favor, ingrese un número válido.";
    } else if (numero < 0) {
      resultadoElemento.textContent = "El factorial no está definido para números negativos.";
    } else {
      var resultado = factorial(numero);
      resultadoElemento.textContent = "El factorial de " + numero + " es " + resultado + ".";
    }
  }
  