window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al iniciar la pagina.
 */
function inicio() {
    let div = document.getElementById("color");

    div.addEventListener('mousedown', cambioAmarillo); //Al presionar el boton encima, hara esta funcion.
    div.addEventListener('mouseup', cambioRojo); //Al dejar de presionar el boton, hara esta funcion.
    div.addEventListener('mouseout', cambioRojo); //Al tener el mouse fuera del boton, hara esta funcion.
}

/**
 * Funcion que le cambia el color del Div a "Amarillo".
 */
function cambioAmarillo() {
    this.style.backgroundColor = "yellow";
    this.innerHTML = "Hola :P";
}

/**
 * Funcion que le cambia el color del Div a "Rojo".
 */
function cambioRojo() {
    this.style.backgroundColor = "red";
    this.innerHTML = "";
}