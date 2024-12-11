/**
 * Clase que oculta o muestra texto dependiendo de su estado.
 * @author Alberto Zamora Landete
 * @since 23/09/24
 */
window.addEventListener('load', inicio);

function inicio() {
    let enlaces = document.getElementsByTagName("a");

    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', cambiar); //En addListener, se utiliza 'click'.
    }    
}

function cambiar(a) {
    let num = this.id;
    let partir = num.split("_");
    let id = partir[1];

    let elemento = document.getElementById("contenidos_" + id); //Buscamos el contenido dependiendo de su "id".

    if (elemento.style.display != "none") { //Si el contenido esta "mostrado", pasa a estar "oculto" y viceversa.
        elemento.style.display = "none";
        this.innerHTML = "Mostrar contenidos"; //El texto del enlace pasa a mostrar.
    } else {
        elemento.style.display = "block";
        this.innerHTML = "Ocultar contenidos"; //El texto del enlace pasa a ocultar.
    }
    a.preventDefault();
}