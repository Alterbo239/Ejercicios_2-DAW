window,addEventListener('load', inicio);

function inicio() {
    document.getElementById("enviar").addEventListener('click', calcular);
}

function calcular() {
    let preguntas = document.getElementsByTagName("select");
    let nota = parseInt(0);
    let mensaje;
    let color;

    for (let i = 0; i < preguntas.length; i++) {
        nota += parseInt(preguntas[i].options[preguntas[i].selectedIndex].value);
    }

    if (nota == 4) {
        mensaje = "Enhorabuena!";
        color = "info";
    } else if (nota == 3) {
        mensaje = "Bien hecho!";
        color = "success";
    } else if (nota == 2) {
        mensaje = "Regular.";
        color = "warning";
    } else if (nota <= 1) {
        mensaje = "Muy mal.";
        color = "danger";
    }

    document.getElementById("nota").value = nota + "/4. " + mensaje;
    document.getElementById("nota").className = "text-" + color + "-emphasis bg-" + color + "-subtle";
}