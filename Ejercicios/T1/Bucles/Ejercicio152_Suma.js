let num, suma = 0, max = 10;

suma = parseInt(suma);
max = parseInt(max);

for (var i = 0; i < max; i++) {
    num = parseInt(prompt("Ingrese un numero:"));

    if (i >= max-5) {
        suma += num;
    }
}

alert("La suma de los 5 ultimos valores es de: " + suma);