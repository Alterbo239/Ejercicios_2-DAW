let num = parseInt(prompt("Ingrese un primer numero: "));
let num2 = parseInt(prompt("Ingrese un segundo numero: "));
let num3 = parseInt(prompt("Ingrese un tercer numero: "));

menor(num, num2, num3);

/**
 * Funcion que muestra el numero mas bajo en unos valores dados.
 * @param {*} n1 Primer numero.
 * @param {*} n2 Segundo numero.
 * @param {*} n3 Tercer numero.
 */
function menor(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        document.write(n1 + " es el numero mas bajo.");
    } else if (n2 <= n3) {
        document.write(n2 + " es el numero mas bajo.");
    } else {
        document.write(n3 + " es el numero mas bajo.");
    }
}