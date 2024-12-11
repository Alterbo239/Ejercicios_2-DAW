/**
 * Clase que cambia colores dependiendo de a que enlace le des.
 * @author Alberto Zamora Landete
 * @since 24/09/2024
 */
let enlaces = document.getElementsByTagName("a");

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].onclick = cambiarColor;
}

/**
 * Funcion que cambia el color y el texto del parrafo dependiendo de que color este pintado.
 */
function cambiarColor() {
    let color = this.id;
    color = color.replace("Cambio_", ""); //Quitamos la palabra "cambio" y nos quedamos con el color.

    let p = document.getElementById("Texto");
    let a = document.getElementById("Cambio_"+color);

    p.style.color = color; //Cambiamos el color al que hemos conseguido del "id".
    p.innerHTML = "Texto de color " + a.name + "."; //Utilizamos el nombre del enlace para escribir el color en castellano.
}