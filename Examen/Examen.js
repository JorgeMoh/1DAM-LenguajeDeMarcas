function comprobarUsuario(event){

    event.preventDefault();

    let nombreUsuario=document.getElementById("usuario").value;

    let reglaNombreUsuario = /^[a-zA-Z]{6}[0-9]{2,}$/;

    if(!reglaNombreUsuario.test(nombreUsuario)){
        document.getElementById("errorUsuario").textContent = "Error: El nombre debe empezar por 6 letras y contener almenos dos numeros juntos";
    } else {
        document.getElementById("errorUsuario").textContent = "";
    }

}