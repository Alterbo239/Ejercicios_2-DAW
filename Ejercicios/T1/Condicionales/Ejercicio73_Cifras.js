let num;

num = parseInt(prompt("Ingrese un numero positivo de una o incluso dos cifras!!"));

if (num >= 1 && num <= 99) {
    if (num < 10) {
        document.write("El numero es de 1 cifra.");
    } else {
        document.write("El numero es de 2 cifras.");
    }
} else {
    document.write("Acaso no he sido claro?");
}