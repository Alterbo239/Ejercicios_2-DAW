/**
 * Clase que oculta o muestra texto dependiendo de su estado.
 * @author Alberto Zamora Landete
 * @since 23/09/24
 */
let enlace = document.getElementsByTagName("a"); //Guardamos todos los enlaces en un array.

for (let i = 0; i < enlace.length; i++) {
    enlace[i].onclick = cambiarParrafo; //Cada vez que clickemos encima, realizara la funcion asignada.
}

/**
 * Funcion que oculta o muestra un texto dependiendo de cual sea su estado actual.
 */
function cambiarParrafo() { //display = "none"/"block".
    let num = this.id;
    let partido = num.split("_"); //Separamos en texto del numero.
    let id = partido[1]; //Nos quedamos con el numero.

    let elemento = document.getElementById("contenidos_" + id); //Buscamos el contenido dependiendo de su "id".

    if (elemento.style.display != "none") { //Si el contenido esta "mostrado", pasa a estar "oculto" y viceversa.
        elemento.style.display = "none";
        this.innerHTML = "Mostrar contenidos"; //El texto del enlace pasa a mostrar.
    } else {
        elemento.style.display = "block";
        this.innerHTML = "Ocultar contenidos"; //El texto del enlace pasa a ocultar.
    }
}