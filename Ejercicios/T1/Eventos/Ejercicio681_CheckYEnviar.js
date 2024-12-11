/**
 * @author Alberto Zamora Landete.
 * @since 27/09/24
 */
window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al cargar la pagina.
 */
function inicio() {
    let check = document.getElementById("lista");
    let boton = document.getElementById("enviar");

    check.addEventListener('change', confirm); //Al cambiar de estado hara esta funcion.
    boton.addEventListener('click', enviar);
}

/**
 * Funcion que activa o desactiva un boton, dependiendo de si el checkbox esta aceptado o no.
 */
function confirm() {
    let boton = document.getElementById("enviar");

    if (this.checked) {
        boton.disabled = false; //Activa el boton. (Desactiva la desactivacion).
    } else {
        boton.disabled = true; //Desactiva el boton. (Activa la desactivacion).
    }
}

function enviar() {
    alert("Formulario enviado");
}