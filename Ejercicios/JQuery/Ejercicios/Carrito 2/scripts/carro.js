$(document).ready(function() {
    //alert("Hola");
});

// Ejercicio 1.
$(function() {
    $(".item").dblclick(function() {
        actualizarArticulo($(this).attr("id"));
    });
});

/**
 * Funcion que actualiza la informacion del articulo seleccionado.
 * @param {*} id ID del articulo.
 */
function actualizarArticulo(id) {
    let stock = $("#"+id).children(".stock").text();
    let stockA = stock.split(" "); //Cogemos el stock que hay y lo separamos para comprobar cuanto queda para actualizarlo.
    
    if (stockA[1] > 0) {
        stockA[1]--;
        let stockRes = stockA.join(" ");
        $("#"+id).children(".stock").text(stockRes); //Actualizamos la cantidad de stock.

        //Funcion que actualizara el carrito.
        actualizarCarrito(id);

        //Si el stock esta bajo minimos, lo tachamos con la clase "agotado".
        if (stockA[1] <= 0) {
            $("#"+id).children(".stock").addClass("agotado");
        }
    }
}

/**
 * Funcion que actualiza la informacion del carrito.
 * @param {*} id ID del articulo seleccionado.
 */
function actualizarCarrito(id) {
    //Incrementar cantidad de articulos en el carrito.
    $("#citem").val(parseInt($("#citem").val())+1);

    let precio = $("#"+id).children(".price").text().split(" ");            
    //Incrementar precio de compra a realizar.
    $("#cprice").val(parseInt($("#cprice").val()) + parseInt(precio[0]) + " €");

    //Clonar articulo y añadirlo al carrito.
    let clon = $("#"+id).clone(); //Clonamos el objeto.
    $(clon).attr("id", "c" + $("#"+id).attr("id")); //Le agregamos una "c" al "id".
    clonar(clon);
}

/**
 * Funcion que clonara el articulo.
 * @param {*} clon Clon del articulo a agregar al carrito.
 */
function clonar(clon) {
    $(clon).addClass("icart"); //Agregamos la clase "icart".
    $(clon).children(".stock").hide(); //Ocultamos al hijo "Stock".
    $(clon).css("cursor", "default"); //Por ultimo le ponemos en "default" la clase "cursor".

    let $delete = $('<a href="" class="delete"></a>'); //Ademas agregamos un link para eliminar el articulo del carrito.
    $(clon).prepend($delete);

    $("#cart_items").prepend(clon); //Lo ponemos todo en el carrito.
    
    $delete.click(function() {
        let idPadre = $(this).parent().attr("id");
        let id = idPadre.substring(1);

        $("#citem").val(parseInt($("#citem").val())-1);
        $("#cprice").val(parseInt($("#cprice").val()) - parseInt($(this).parent().children(".price").text()) + " €");

        let stock = $("#" + id).children(".stock").text();
        let stockA = stock.split(" ");

        if(stockA[1] == 0) {
            $("#" + id).children(".stock").removeClass("agotado");
        }

        stockA[1]++;
        let stockRes = stockA.join(" ");
        $("#" + id).children(".stock").text(stockRes);
        
        $(this).parent().remove();

        return false;
    });
}