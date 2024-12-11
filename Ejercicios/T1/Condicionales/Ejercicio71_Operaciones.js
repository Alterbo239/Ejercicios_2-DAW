let n1, n2;

n1 = parseInt(prompt("Introduzca un numero: "));
n2 = parseInt(prompt("Introduzca otro numero: "));

if (n1 > n2) {
    let suma = n1 + n2;
    let dif = n1 - n2;
    document.write("La suma es de: " + suma + ". La diferencia es de: " + dif);
} else {
    let prod = n1 * n2;
    let div = n2/n1;
    document.write("El producto es de: " + prod + ". La division es de: " + div);
}