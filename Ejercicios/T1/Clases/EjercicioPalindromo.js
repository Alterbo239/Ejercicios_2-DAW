let cadena = prompt("Ingrese una palabra:").toLocaleLowerCase();
let fuera = /[\W_]/g; //Cosa que remueve caracteres no deseados.
var cadena2 = cadena.replace(fuera, ''); //Funcion que aplica que los caracteres no desados se borren.

var cadenaR = cadena2.split('').reverse().join('');

if (cadena2 === cadenaR) {
    document.write(cadena2 + ": es una palabra palindroma.");
} else {
    document.write(cadena2 + ": NO es una palabra palindroma.");
}