let num1, num2, num3;

num1 = parseInt(prompt("Ingrese un numero."));
num2 = parseInt(prompt("Ingrese otro numero."));
num3 = parseInt(prompt("Ingrese un ultimo numero."));

if (num1 == num2 && num1 == num3) {
    let resultado = (num1 + num2) * num3;
    alert(resultado);
} else {
    alert("Los numeros no son iguales.");
}