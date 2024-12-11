window.addEventListener('load', inicio);

function inicio() {
    let listas = document.getElementsByTagName("select");

    for (let i = 0; i < listas.length; i++) {
        listas[i].addEventListener('change', ponerPrecio);
    }

    let boton = document.getElementById("botonCalcular");
    boton.addEventListener('click', calcular);
}

function calcular() {
    let listas = document.getElementsByTagName("select");
    let suma = parseInt(0);

    for (let i = 0; i < listas.length; i++) {
        suma += parseInt(listas[i].options[listas[i].selectedIndex].value);
    }

    if(suma >= 0) {
        document.getElementById("precioFinal").value = suma + " $";
    } else {
        alert("Te quedan productos por seleccionar.");
    }
}

function ponerPrecio() {
    let texto = this.options[this.selectedIndex].text;
    let precio = this.options[this.selectedIndex].value;

    this.options[this.selectedIndex].text = texto + " " + precio;
}