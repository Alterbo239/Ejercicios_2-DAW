let fecha = new Date();

//Mensaje a escribir.
document.write(crearCadena(fecha));

/**
 * Funcion que crea una cadena de texto con la fecha especifica de hoy.
 * @param {*} fecha //Variable "Date".
 * @returns Cadena de texto ya formada.
 */
function crearCadena(fecha) {
    let dia = fecha.getDay(); //Dia de la semana.
    let numDia = fecha.getDate(); //Dia del mes.
    let mes = fecha.getMonth(); //Numero del mes.
    let any = fecha.getFullYear(); //Any.

    //Arrays con los nombres.
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let cadena = "Hoy es " + dias[dia] + " " + numDia + " de " + meses[mes] + " de " + any + ".";

    return cadena;
}