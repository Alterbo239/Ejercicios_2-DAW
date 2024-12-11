let num;

document.write("La suma de todos los numeros es: " + sumar5(num));

/**
 * Funcion que suma 5 valores pedidos.
 * @param {*} num Valor que pediremos al usuario.
 * @returns Suma de todos los valores pedidos.
 */
function sumar5(num) {
    let sumar = parseInt(0);

    for (var i = 0; i < 5; i++) {
        num = parseInt(prompt("Introduzca el numero " + (i+1) + ": "));
        sumar += num;
    }

    return sumar;
}