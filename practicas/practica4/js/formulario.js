function imprimirInformacion() {
    // Obtener los valores de cada campo del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var edad = document.getElementById("edad").value;
    
    // Obtener el valor seleccionado de los radio buttons
    var generos = document.getElementsByName("genero");
    var generoSeleccionado = "";
    for (var i = 0; i < generos.length; i++) {
      if (generos[i].checked) {
        generoSeleccionado = generos[i].value;
        break;
      }
    }
    
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var colorFavorito = document.getElementById("colorFavorito").value;
    
    // Crear el texto que se mostrará con toda la información
    var resultadoTexto = "<strong>Información Recibida:</strong><br>" +
                         "Nombre: " + nombre + "<br>" +
                         "Correo: " + correo + "<br>" +
                         "Edad: " + edad + "<br>" +
                         "Género: " + generoSeleccionado + "<br>" +
                         "Fecha de nacimiento: " + fechaNacimiento + "<br>" +
                         "Color favorito: " + colorFavorito;
    
    // Mostrar la información en el párrafo
    document.getElementById("resultadoInfo").innerHTML = resultadoTexto;
  }
  