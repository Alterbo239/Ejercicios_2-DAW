addEventListener('DOMContentLoaded', inicio);

function inicio() {
    let enlaces = document.getElementsByTagName("a");

    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', cambio); //En addListener, se utiliza 'click'.
    }    
}

function cambio(a) {
    let nom = this.id;
    let id = nom.replace("cambio_", "");

    let elemento = document.getElementById("Texto");
    elemento.style.fontSize = id + "%";

    elemento.innerHTML = "Tamaño " + this.name + " (" + id + "%)";
    a.preventDefault();
}