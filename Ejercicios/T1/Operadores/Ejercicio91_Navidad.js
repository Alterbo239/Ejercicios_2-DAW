let dia, mes, any;

dia = parseInt(prompt("Ingrese un dia"));
mes = parseInt(prompt("Ingrese un mes"));
any = parseInt(prompt("Ingrese un any"));

if (dia > 31 || mes > 12 || dia < 1 || mes < 1) {
    alert("Fecha invalida, como tus neuronas.");
} else if (dia > 21 && mes == 12) {
    alert("Es navidad :D");
} else if (dia < 6 && mes == 1) {
    alert("Se esta acabando la navidad D:");
} else {
    alert("No es navidad :(");
}