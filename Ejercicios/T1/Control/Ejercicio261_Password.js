window.addEventListener('load', inicio);

function inicio() {
    let boton = document.getElementById("boton");
    boton.addEventListener('click', confirmar); //Introducimos el evento de "mandar".
}

/**
 * Funcion que confirma si dos passwords son iguales.
 */
function confirmar() {
    let pass1 = document.getElementById("pass").value;
    let pass2 = document.getElementById("passConf").value; //Pillamos el valor de ambos passwords.

    if(pass1 == "" || pass2 == "") { //Si alguna pass esta vacia, no comprueba.
        alert("Introduzca la password, por favor.");
    } else {
        if(pass1 == pass2) { //Si estan rellenas, las compara.
        alert("Las passwords son iguales.");
        } else {
            alert("Las passwords no son iguales, intentelo de nuevo.");
        }
    }    
}