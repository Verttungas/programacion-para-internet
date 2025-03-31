function evaluarCalificacion() {
    // Obtener el valor ingresado y convertirlo a número
    var calificacion = parseFloat(document.getElementById("calificacion").value);
    var resultado = "";
  
    // Validar que el número esté en el rango permitido
    if (isNaN(calificacion)) {
      resultado = "Por favor, ingrese una calificación válida.";
    } else if (calificacion < 0 || calificacion > 10) {
      resultado = "Error: La calificación debe estar entre 0 y 10.";
    } else if (calificacion === 10) {
      // Si es exactamente 10, se muestra LAP
      resultado = "LAP";
    } else if (calificacion >= 9) {
      resultado = "MB";
    } else if (calificacion >= 7.5) {
      resultado = "B";
    } else if (calificacion >= 6) {
      resultado = "S";
    } else {
      resultado = "NA";
    }
  
    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").textContent = resultado;
  }
  