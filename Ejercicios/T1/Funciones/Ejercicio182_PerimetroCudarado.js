let lado = parseInt(prompt("Ingrese el lado del cuadrado:"));

document.write("El perimetro de ese cuadrado es: " + perimetro(lado));

/**
 * Funcion que calcula el perimetro de un cuadrado.
 * @param {*} lado //Valor del lado del cuadrado.
 * @returns Perimetro calculado del cuadrado.
 */
function perimetro(lado) {
    let p = lado * 4;
    return p;
}