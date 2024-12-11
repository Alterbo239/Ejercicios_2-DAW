window.addEventListener('load', inicio);

function inicio() {
    let hora = prompt("Ingrese la hora: ");
    let minutos = prompt("Ingrese los minutos: ");
    let segundos = prompt("Ingrese los segundos: ");
    let horaCompleta;
    if(segundos != "") {
        horaCompleta = hora + ":" + minutos + ":" + segundos;
    } else {
        horaCompleta = hora + ":" + minutos;
    }

    let patron = /^([0-23]{2}):([0-59]{2})(:[0-59]{2})?$/;

    if(patron.test(horaCompleta)) {
        document.write("La hora " + horaCompleta + " es correcta.");
    } else {
        document.write("La hora " + horaCompleta + " en la Tierra no es valida.");
    }
}