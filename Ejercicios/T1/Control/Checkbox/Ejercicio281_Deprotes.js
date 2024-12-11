window.addEventListener('load', inicio);

function inicio() {
    document.getElementById("enviar").addEventListener('click', mostrar); //Asignamos la funcion a la accion.
}

function mostrar() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]'); //Pillamos todos los "checkbox" y los metemos en un array.

    for (let i = 0; i < checkboxes.length; i++) { //Recorremos el array.
        if (checkboxes[i].checked) {
            alert(checkboxes[i].value); //Si la opcion esta seleccionada, mostramos su valor.
        }
    }
}