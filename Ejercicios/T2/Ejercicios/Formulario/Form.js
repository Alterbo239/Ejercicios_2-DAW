/**
 * pass1 == pass2 => "Las passwords deben coincidir."
 * fechaInicio > actual.
 */
window.addEventListener('load', inicio);

function inicio() {
    document.getElementById("pass1").addEventListener("input", validar, false);
    document.getElementById("pass2").addEventListener("input", validar, false);

    document.getElementById("enviar").addEventListener("click", subir);
}

function validar() {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");

    if(pass1.value !== pass2.value) {
        pass2.setCustomValidity("Las passwords deben coincidir.");
    } else {
        pass2.setCustomValidity("");
    }
}

function fechaValida() {
    let valido;

    let fecha = document.getElementById("fechaInicio");
    let fechaI = fecha.value.split("-");
    let fechaInicio = new Date(fechaI[0], fechaI[1] - 1, fechaI[2]);

    let fechaActual = new Date();

    if(fechaActual.getFullYear() <= fechaInicio.getFullYear()) {
        
        if(fechaActual.getMonth() <= fechaInicio.getMonth()) {
            valido = true;
            if(fechaActual.getMonth() == fechaInicio.getMonth() && fechaActual.getDate() > fechaInicio.getDate()) {
                valido = false;
            }

        } else {
            valido = false;
        }

    } else {
        valido = false;
    }

    return valido;
}

function subir() {
    if(document.getElementById("nom").checkValidity()) {
        document.getElementById("nom").style = "border: solid 2px green";
    } else {
        document.getElementById("nom").style = "border: solid 2px red";
    }

    if(document.getElementById("email").checkValidity()) {
        document.getElementById("email").style = "border: solid 2px green";
    } else {
        document.getElementById("email").style = "border: solid 2px red";
    }

    if(document.getElementById("pass2").checkValidity()) {
        document.getElementById("pass2").style = "border: solid 2px green";
    } else {
        document.getElementById("pass2").style = "border: solid 2px red";
    }

    if(fechaValida()) {
        document.getElementById("fechaInicio").style = "border: solid 2px green";
        document.getElementById("fechaInicio").setCustomValidity("");
    } else {
        document.getElementById("fechaInicio").style = "border: solid 2px red";
        document.getElementById("fechaInicio").setCustomValidity("La fecha debe ser una futura, a ser posible.");
    }

    if(document.getElementById("url").checkValidity()) {
        document.getElementById("url").style = "border: solid 2px green";
    } else {
        document.getElementById("url").style = "border: solid 2px red";
    }

    if(document.getElementById("cant").checkValidity()) {
        document.getElementById("cant").style = "border: solid 2px green";
    } else {
        document.getElementById("cant").style = "border: solid 2px red";
    }
}