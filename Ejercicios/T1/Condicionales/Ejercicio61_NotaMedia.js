let nombre;
let nota1, nota2, nota3;

nombre = prompt("Ingrese el nombre del alumno:");
nota1 = parseInt(prompt("Nota de la primera evaluacion"));
nota2 = parseInt(prompt("Nota de la segunda evaluacion"));
nota3 = parseInt(prompt("Nota de la tercera evaluacion"));

let resultado = (nota1 + nota2 + nota3) / 3;

document.write("La nota media de " + nombre + " es: " + resultado + ".");
if (resultado >= 7) {
    alert("Promocionado.");
} else {
    alert("No promocionado.");
}
