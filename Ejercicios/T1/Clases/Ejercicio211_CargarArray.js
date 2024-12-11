let vec = new Array(8);
cargarArray(vec);
mostrar(vec);
document.write("<br> Numeros mayores a 36: ");
mayor36(vec);
document.write("<br> Cantidad de numeros mayores a 50: " + cantidadMayor50(vec));

/**
 * Funcion que carga valores en un Array.
 * @param {*} vec Array a cargar.
 */
function cargarArray(vec) {
    for (var i = 0; i < vec.length; i++) {
        let n = parseInt(prompt("Ingrese el valor " + (i+1)));
        vec[i] = n;
    }
}

/**
 * Funcion que muestra un array completo.
 * @param {*} vec Array a mostrar.
 */
function mostrar(vec) {
    for (var i = 0; i < vec.length; i++) {
        document.write(vec[i] + " ");
    }
}

/**
 * Funcion que muestra los valores de un array superiores a 36.
 * @param {*} vec Array a mostrar.
 */
function mayor36(vec) {
    for (var i = 0; i < vec.length; i++) {
        if (vec[i] > 36) {
            document.write(vec[i] + " ");
        }
    }
}

/**
 * Funcion que cuenta cuantos numeros en un array son superiores a 50.
 * @param {*} vec Array a mostrar.
 * @returns Suma de la cantidad.
 */
function cantidadMayor50(vec) {
    let suma = parseInt(0);

    for(var i = 0; i < vec.length; i++) {
        if(vec[i] > 50) {
            suma++;
        }
    }

    return suma;
}