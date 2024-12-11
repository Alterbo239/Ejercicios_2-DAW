window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al cargar la pagina.
 */
function inicio() {
    let cantidad = document.getElementById("escribir");

    cantidad.addEventListener('keyup', restante);
}

function restante() {
    let cant = document.getElementById("escribir").value.length;
    let disp = 140 - parseInt(cant);

    document.getElementById("cantidad").innerHTML = disp;
}