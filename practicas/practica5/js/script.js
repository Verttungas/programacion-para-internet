function agregarFila() {
    const texto = document.getElementById('campoTexto').value.trim()
    const email = document.getElementById('campoEmail').value.trim()
    const fechaHora = document.getElementById('campoFechaHora').value
    const color = document.getElementById('campoColor').value
    const rango = document.getElementById('campoRange').value
    const radios = document.getElementsByName('opcionesRadio')
    let radioSeleccionado = ''
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioSeleccionado = radios[i].value
        break
      }
    }
    const checkboxes = document.getElementsByName('opcionesCheckbox')
    let checksSeleccionados = []
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checksSeleccionados.push(checkboxes[i].value)
      }
    }
    const mensajeError = document.getElementById('mensajeError')
    mensajeError.textContent = ''
    if (
      texto === '' ||
      email === '' ||
      radioSeleccionado === '' ||
      checksSeleccionados.length === 0 ||
      fechaHora === '' ||
      color === '' ||
      rango === ''
    ) {
      mensajeError.textContent = 'Por favor, completa todos los campos.'
      return
    }
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0]
    const nuevaFila = tabla.insertRow()
    const celdaTexto = nuevaFila.insertCell()
    const celdaEmail = nuevaFila.insertCell()
    const celdaRadio = nuevaFila.insertCell()
    const celdaCheckbox = nuevaFila.insertCell()
    const celdaFechaHora = nuevaFila.insertCell()
    const celdaColor = nuevaFila.insertCell()
    const celdaRango = nuevaFila.insertCell()
    celdaTexto.textContent = texto
    celdaEmail.textContent = email
    celdaRadio.textContent = radioSeleccionado
    celdaCheckbox.textContent = checksSeleccionados.join(', ')
    celdaFechaHora.textContent = fechaHora
    celdaColor.textContent = color
    celdaRango.textContent = rango
    document.getElementById('miFormulario').reset()
  }
  