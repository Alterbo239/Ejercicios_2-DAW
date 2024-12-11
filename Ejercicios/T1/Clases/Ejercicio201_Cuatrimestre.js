let fecha = new Date();

let mes = fecha.getMonth();
cuatri(mes);

/**
 * Funcion que calcula y devuelve que cuatrimestre es.
 * @param {*} mes Numero del mes.
 */
function cuatri(mes) {
    if (mes >= 0 && mes <= 3) {
        document.write("Estamos en el primer cuatrimestre.");
    } else if (mes >= 4 && mes <= 7) {
        document.write("Estamos en el segundo cuatrimestre.");
    } else if (mes >= 8 && mes <= 11) {
        document.write("Estamos en el tercer cuatrimestre.");
    } else {
        document.write("Creo que ha habido un error.");
    }
}