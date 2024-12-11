let num = parseInt(5);
let m = "Hola que tal";

var nLetras = m.length; //Longitud de la palabra.
var letra = m.charAt(1); //Caracter de la posicion 1 en la palabra.
var pos = m.indexOf('o'); //Posicion del primer caracter 'o'.
var sub = m.substring(3); //Guarda el String a partir del 3º caracter.
var sub2 = m.substring(1, 4); //Guarda el String desde el caracter 1 al 4.
var divi = m.split(" "); //Crear un array que guarda Strings separados por " ". (espacio).
var array = ["Hola", "que", "tal"];
var juntar = array.join(" "); //Guarda en un String los Strings dentro del array.

document.write(nLetras + "<br>");
document.write(letra + "<br>");
document.write(pos + "<br>");
document.write(sub + "<br>");
document.write(sub2 + "<br>");
document.write(divi[2] + "<br>");
document.write(juntar + "<br>");