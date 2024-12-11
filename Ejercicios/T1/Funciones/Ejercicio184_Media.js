let num1 = parseInt(prompt("Ingrese un primer numero:"));
let num2 = parseInt(prompt("Ingrese un segundo numero:"));
let num3 = parseInt(prompt("Ingrese un tercer numero:"));

document.write("La media de esos tres numeros es: " + media(num1, num2, num3));

/**
 * Funcion que calcula la media de 3 numeros.
 * @param {*} n1 //Primer numero.
 * @param {*} n2 //Segundo numero.
 * @param {*} n3 //Tercer numero.
 * @returns Resultado de la media.
 */
function media(n1, n2, n3) {
    let media = (n1 + n2 + n3)/3;
    return media;
}