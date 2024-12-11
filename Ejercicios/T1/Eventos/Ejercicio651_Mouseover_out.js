window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al cargar la pagina.
 */
function inicio() {
    let h1 = document.getElementById("Texto");

    h1.addEventListener('mouseover', cambiar); //Al tener el raton encima, hara esta funcion.
    h1.addEventListener('mouseout', descambiar); //Al sacar el raton fuera de la etiqueta, hara esta funcion.
}

/**
 * Funcion que cambia los colores del texto y el fondo.
 */
function cambiar() {
    this.style.color = "red";
    this.style.backgroundColor = "yellow";
}

/**
 * Funcion que vuelve a los colores originales.
 */
function descambiar() {
    this.style.color = "black";
    this.style.backgroundColor = "white";
}