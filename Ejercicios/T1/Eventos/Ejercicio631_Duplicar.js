window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al iniciar.
 */
function inicio() {
    let duplicado = document.getElementById("num"); //Boton para duplicar.
    let botonR = document.getElementById("reinicio"); //Boton para reiniciar el numero.

    duplicado.addEventListener('dblclick', duplicar);
    botonR.addEventListener('click', reiniciar);
}

/**
 * Funcion que duplica el numero hasta 256.
 */
function duplicar() {
    let div = document.getElementById("num");

    if (div.textContent >= 256) {
        this.removeEventListener('dblclick', duplicar);
    } else {
        div.textContent *= 2;
    }
}

/**
 * Funcion que reinicia el numero.
 */
function reiniciar() {
    let div = document.getElementById("num");

    if (div.textContent >= 256) {
        document.getElementById("num").addEventListener('dblclick', duplicar);
    }

    div.innerHTML = 2;
}