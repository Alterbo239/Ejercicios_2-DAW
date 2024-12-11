window.addEventListener('load', inicio);

function inicio() {
    document.getElementById("enviar").addEventListener('click', mostrar);
}

function mostrar() {
    let valor = document.getElementsByName("edad");

    for (let i = 1; i <= valor.length; i++) {
        let radio = document.getElementById("op"+i);

        if (radio.checked) {
            if (radio.value == "mayor") {
                alert("Bienvenido a la fiesta.");
            } else {
                alert("Vete a casa chaval... Vuevle cuando sea mayor.");
            }
        }
    }
}