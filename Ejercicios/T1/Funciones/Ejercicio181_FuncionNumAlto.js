let n1, n2, n3;

n1 = parseInt(prompt("Ingrese el primer valor: "));
n2 = parseInt(prompt("Ingrese el segundo valor: "));
n3 = parseInt(prompt("Ingrese el tercer valor: "));

document.write("El numero mas alto es: " + mayor(n1, n2, n3));

/**
 * Funcion que calcula que numero es el mas alto.
 * @param {*} n1 //Primer numero a comparar.
 * @param {*} n2 //Segundo numero a comparar.
 * @param {*} n3 //Tercer numero a comparar.
 * @returns Numero mas alto
 */
function mayor (n1, n2, n3) {
    let x;
    if (n1 >= n2 && n1 >= n3) {
        x = n1;
    } else if (n2 >= n3) {
        x = n2;
    } else {
        x = n3;
    }
    return x;
}