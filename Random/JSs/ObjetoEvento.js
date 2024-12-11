window.onload = function() {
    document.onkeydown = muestraInfo;
    document.onkeypress = muestraInfo;
    document.onkeyup = muestraInfo;
}

function muestraInfo(elEvento) {
    let evento = window.event || elEvento;
    let info = document.getElementById("info");

    let mensaje = "Tipo: " + evento.type + "<br>" + 
                    "Propiedad keyCode: " + evento.keyCode + "<br>" + 
                    "Propiedad charCode: " + evento.charCode + "<br>" + 
                    "Caracter pulsado: " + String.fromCharCode(evento.charCode);

    info.innerHTML += "<br>------------------------------<br>" + mensaje;
}