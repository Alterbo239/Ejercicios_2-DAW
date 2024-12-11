let nota1, nota2, nota3;

nota1 = parseInt(prompt("Ingrese la primera nota:"));
nota2 = parseInt(prompt("Ingrese la segunda nota:"));
nota3 = parseInt(prompt("Ingrese la tercera nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 4) {
    alert("Regular");
} else {
    alert("Reprobado");
}