let lado1, lado2, lado3;
let equi = 0, iso = 0, esca = 0;

equi = parseInt(equi);
iso = parseInt(iso);
esca = parseInt(esca);

for (var i = 0; i < 4; i++) {
    alert("Triangulo " + (i+1));
    lado1 = parseInt(prompt("Ingrese el primer lado del Triangulo:"));
    lado2 = parseInt(prompt("Ingrese el segundo lado del Triangulo:"));
    lado3 = parseInt(prompt("Ingrese el tercer lado del Triangulo:"));

    if (lado1 == lado2 && lado1 == lado3) {
        equi++;
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        iso++;
    } else {
        esca++;
    }
}

document.write("Equilateros: " + equi + "<br>");
document.write("Isosceles: " + iso + "<br>");
document.write("Escalenos: " + esca + "<br>");

if (equi <= iso && equi <= esca) {
    if (equi == iso) {
        document.write("Los triangulos equilateros e isosceles son los que menos cantidad tienen.");
    } else if (equi == esca) {
        document.write("Los triangulos equilateros y escalenos son los que menos cantidad tienen.");
    } else {
        document.write("El triangulo equilatero es el que menos cantidad tiene.");
    }
} else if (iso <= esca) {
    if  (iso == esca) {
        document.write("Los triangulos isosceles y escalenos son los que menos cantidad tienen.");
    } else {
        document.write("El triangulo isoslceles es el que menos cantidad tiene.");
    }
} else {
    document.write("El triangulo escaleno es el que menos cantidad tiene.");
}