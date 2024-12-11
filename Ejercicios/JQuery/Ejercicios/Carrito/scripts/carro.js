$(document).ready(function() {
    //alert("Hola");
});

//Ejercicio 1.
$(function() {
    $(".item").css("background-color", "#cecece");
});

//Ejercicio 2.
$(function() {
    $("#cart_items").css("border", "solid 4px black");
});

//Ejercicio 3.
$(function() {
    $("img").css("border", "solid 1px blue");
});

//Ejercicio 4.
$(function() {
    $(".item > label").css("text-decoration", "underline");
});

//Ejercicio 5.
$(function() {
    $("#cart_container button").css("color", "red");
});

//Ejercicio 6.
$(function() {
    $(".item label + label").css("color", "white");
});

//Ejercicio 7.
$(function() {
    $("input, *:contains('€')").css("color", "green");
});

//Ejercicio 8.
$(function() {
    $("div:empty").css("background-color", "yellow");
});

//Ejercicio 9.
$(function() {
    $(".item:first, .item:last").css("background-color", "red");
});

//Ejercicio 10.
$(function() {
    $("img[src *= 'camiseta']").css("border-color", "green");
});