let tam = parseInt(prompt("Cuanta capacidad quiere que tenga el vector?"));

let vec1 = new Array(tam);
let vec2 = new Array(tam);
let vec3 = new Array(tam);

//Llamada a la funcion para cargar los Array:
cargarArray(vec1, tam);
cargarArray(vec2, tam);

//Llamada a la funcion para sumar los Array:
sumarArray(vec1, vec2, vec3, tam);

//Llamada a la funcion para mostrar los Array:
mostrarArray(vec1, tam);
document.write("<br>");
mostrarArray(vec2, tam);
document.write("<br>");
mostrarArray(vec3, tam);

//Funciones.
/**
 * Funcion que carga un Array.
 * @param {*} vec Array a cargar.
 * @param {*} tam Capacidad del Array.
 */
function cargarArray(vec, tam) {
    for (var i = 0; i < tam; i++) {
        let n = parseInt(prompt("Ingrese el valor " + (i+1)));
        vec[i] = n;
    }
}

/**
 * Funcion que suma 2 Array.
 * @param {*} v1 Primer Array a sumar.
 * @param {*} v2 Segundo Array a sumar.
 * @param {*} v3 Array resultdo de la suma.
 * @param {*} tam Capacidad del Array.
 */
function sumarArray(v1, v2, v3, tam) {
    for (var i = 0; i < tam; i++) {
        v3[i] = (v1[i] + v2[i]);
    }
}

/**
 * Funcion que muestra un Array.
 * @param {*} vec Array a mostrar.
 * @param {*} tam Capacidad del Array.
 */
function mostrarArray (vec, tam) {
    for (var i = 0; i < tam; i++) {
        document.write(vec[i] + " ");
    }
}