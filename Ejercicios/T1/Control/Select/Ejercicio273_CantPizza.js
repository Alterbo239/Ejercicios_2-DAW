window.addEventListener('load', inicio);

function inicio() {
    let boton = document.getElementById("calcular");
    boton.addEventListener('click', total);
}

/**
 * Funcion que calcula el precio del pedido de pizzas.
 */
function total() {
    let select = document.getElementById("pizza"); //Se coge la lista de pizzas.
    let cantidad = parseInt(document.getElementById("cantidad").value); //Cogemos la cantidad de pizzas y las convertimos a un numero entero.

    document.getElementById("total").value = select.options[select.selectedIndex].value * cantidad + "$"; //Mostramos el importe total.
}