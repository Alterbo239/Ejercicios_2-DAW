let num = parseInt(prompt("Ingrese un primer numero: "));
let num2 = parseInt(prompt("Ingrese un segundo numero: "));
let num3 = parseInt(prompt("Ingrese un tercer numero: "));

ordenar(num, num2, num3);

/**
 * Funcion que ordena numeros introducidos.
 * @param {*} n1 Primer numero a comprobar.
 * @param {*} n2 Segundo numero a comprobar.
 * @param {*} n3 Tercer numero a comprobar.
 */
function ordenar(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        document.write(n1 + " ");
        if (n2 <= n3) {
            document.write(n2 + " " + n3);
        } else {
            document.write(n3 + " " + n2);
        }
    }  else if (n2 <= n3) {
        document.write(n2 + " ");
        if (n1 <= n3) {
            document.write(n1 + " " + n3);
        } else {
            document.write(n3 + " " + n1);
        }
    } else {
        document.write(n3 + " ");
        if (n1 <= n2) {
            document.write(n1 + " " + n2);
        } else {
            document.write(n2 + " " + n1);
        }
    }

    document.write(".");
}