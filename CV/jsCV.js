
function nombre(clase) {
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    if (nuevoNombre.trim() === "") {
      alert("Introduzca un texto");
      return;
    }
    const elementos = document.querySelectorAll(`.${clase}`);
    if (elementos.length > 0) {
      elementos.forEach((el) => {
        el.textContent = nuevoNombre;
      });
      alert("Nombre cambiado");
    } else {
      alert("Error");
    }
  }

  function color(clase) {
    const nuevoColor = document.getElementById('nuevoColor').value;
    if (nuevoColor.trim() === "") {
      alert("Introduzca un color");
      return;
    }
    const elementos = document.querySelectorAll(`.${clase}`);
    if (elementos.length > 0) {
      elementos.forEach((el) => {
        el.style.backgroundColor=nuevoColor;
      });
      alert("Color cambiado");
    } else {
      alert("Error");
    }
  }

  function tipografia(clase) {
    const nuevaTipografia = document.getElementById('fontPicker').value;
    if (nuevaTipografia.trim() === "") {
      alert("Tipografia no válida");
      return;
    }
    const elementos = document.querySelectorAll(`.${clase}`);
    
    if (elementos.length > 0) {
      elementos.forEach((el) => {
        el.style.fontFamily = nuevaTipografia;
      });
      alert("Tipografía cambiada");
    } else {
      alert("Error");
    }
  }
