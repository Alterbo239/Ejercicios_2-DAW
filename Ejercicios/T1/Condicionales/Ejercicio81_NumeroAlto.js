let n1, n2, n3;

n1 = parseInt(prompt("Ingrese un numero:"));
n2 = parseInt(prompt("Ingrese otro numero:"));
n3 = parseInt(prompt("Ingrese un ultimo numero:"));

if (n1 >= n2 && n1 >= n3) {
    alert("El numero mas grande es: " + n1);
} else {
    if (n2 >= n3) {
        alert("El numero mayor es: " + n2);
    } else {
        alert("El numero mayor es: " + n3);
    }
}