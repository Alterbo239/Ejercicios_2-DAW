let num = parseInt(prompt("Ingrese valor de hasta 5 digitos:"));

while (num > 99999) {
    num = parseInt(prompt("De hasta 5 digitos he dicho!!!"));
}

document.write("Ese numero tiene " + cantidadDigitos(num) + " digitos.");

/**
 * Funcion que calcula cuantos digitos tiene un numero ingresado.
 * @param {*} num //Valor del numero a calcular.
 * @returns Cantidad de digitos en el numero.
 */
function cantidadDigitos(num) {
    let r = parseInt(0);

    while(num > 0) {
        r++;
        num /= 10;
        num = Math.trunc(num); //Quita decimales a un numero.
    }
        
    return r;
}