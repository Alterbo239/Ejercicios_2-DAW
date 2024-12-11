let num1, num2, num3;

num1 = parseInt(prompt("Ingrese un numero."));
num2 = parseInt(prompt("Ingrese otro numero."));
num3 = parseInt(prompt("Ingrese un ultimo numero."));

if (num1 < 10 || num2 < 10 || num3 < 10) {
    alert("Hay al menos un numero menor a 10.");
} else {
    alert("No hay numeros menores a 10.");
}