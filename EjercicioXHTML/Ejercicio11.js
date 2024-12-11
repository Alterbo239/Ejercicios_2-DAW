// Ejercicio 1:
let enlaces = document.getElementsByTagName("a");

alert("La pagina tiene " + enlaces.length + " enlaces.");

//Ejercicio 2:
let penultimo = enlaces[enlaces.length-2];

alert("El contenido del penultimo enlace es: " + penultimo);

//Ejercicio 3:
let enlacesPrueba = parseInt(0);
for (let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba/") {
        enlacesPrueba++;
    }
}

alert("Enlaces que ennlazan con 'http://prueba': " + enlacesPrueba);

//Ejercicio 4:
let parrafos = document.getElementsByTagName("p");
let tercerParrafo = parrafos[parrafos.length-1];
let enlacesTercero = tercerParrafo.getElementsByTagName("a");

alert("El numero de enlaces en el tercer parrafo es de: " + enlacesTercero.length + ".");