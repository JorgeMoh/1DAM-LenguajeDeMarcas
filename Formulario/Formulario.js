function comprobarFormulario(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let aficion = document.getElementById("aficion").value;
    let transporte = document.querySelector('input[name="transporte"]:checked');
    let check = document.getElementById("check").checked;
    let contrasenia = document.getElementById("contrasenia").value;
    let prueva = document.getElementById("id").value
    let errores = false;

    let reglaNombre = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    let reglaEdad = /^[0-9]{1,2}$/; 
    let reglaTelefono = /^[0-9]{6}$/;
    let reglaEmail = /^[a-zA-Z0-9]+@(hotmail|gmail)\.com$/;
    let reglaContraseniaDebil = /^[A-Za-z0-9!@#$%^&*]{1,4}$/;
    let reglaMayusContrasenia = /^[a-z0-9!@#$%^&*]{5,8}$/;
    let reglaNumContrasenia = /^[A-Za-z!@#$%^&*]{5,8}$/;
    let reglaCaractEspContrasenia = /^[A-Za-z0-9]{5,8}$/;
    let reglaContrasenia = /^[A-Za-z0-9!@#$%^&*]{8}$/;


    if (!reglaNombre.test(nombre)) {
        document.getElementById("errorNombre").textContent = "El nombre debe incluir nombre y apellido con la primera letra en mayúscula.";
        errores = true;
    } else {
        document.getElementById("errorNombre").textContent = "";
    }
                
    if (!reglaEdad.test(edad)) {
        document.getElementById("errorEdad").textContent = "La edad debe estar entre 0 y 99 años.";
        errores = true;
    } else {
        document.getElementById("errorEdad").textContent = "";
    }  
             
    if (!reglaTelefono.test(telefono)) {
        document.getElementById("errorTelefono").textContent = "El teléfono debe tener exactamente 6 dígitos.";
        errores = true;
    } else {
        document.getElementById("errorTelefono").textContent = "";
    }   

    if (!reglaEmail.test(email)) {
        document.getElementById("errorEmail").textContent = "El email debe ser de dominio hotmail o gmail.";
        errores = true;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }  
             
    if (reglaContraseniaDebil.test(contrasenia)) {
        document.getElementById("errorContrasenia").textContent = "Contraseña débil.";
        document.getElementById("contraseniaFuerte").textContent = ""; 
        errores = true;
    } else if (reglaMayusContrasenia.test(contrasenia) || reglaNumContrasenia.test(contrasenia) ||
    reglaCaractEspContrasenia.test(contrasenia)) {
        document.getElementById("errorContrasenia").textContent = "Contraseña media.";
        document.getElementById("contraseniaFuerte").textContent = ""; 
        errores = true;
    } else if (!reglaMayusContrasenia.test(contrasenia) && !reglaNumContrasenia.test(contrasenia) &&
    !reglaCaractEspContrasenia.test(contrasenia) && reglaContrasenia.test(contrasenia)) {
        document.getElementById("contraseniaFuerte").textContent = "Contraseña Fuerte"; 
        document.getElementById("errorContrasenia").textContent = "";
    }else {
        document.getElementById("errorContrasenia").textContent = "Debes introducir una contraseña";
        document.getElementById("contraseniaFuerte").textContent = ""; 
        errores = true;
    }

    if (aficion !== "Fútbol" && aficion !== "Tenis" && aficion !== "Baloncesto") {
        document.getElementById("errorAficion").textContent = "Selecciona una afición";
        errores = true;
    } else {
        document.getElementById("errorAficion").textContent = "";
    }

    if (!transporte) {
        document.getElementById("errorTransporte").textContent = "Debes seleccionar un medio de transporte.";
        errores = true;
    } else {
        document.getElementById("errorTransporte").textContent = "";
    }

    if (!check) {
        document.getElementById("errorTerminos").textContent = "Debes aceptar los términos y condiciones.";
        errores = true;
    } else {
        document.getElementById("errorTerminos").textContent = "";
    }

    if (!errores) {
        alert("Formulario validado correctamente.");
    }
    
}





        