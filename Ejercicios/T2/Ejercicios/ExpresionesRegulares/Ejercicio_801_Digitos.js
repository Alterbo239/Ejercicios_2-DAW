window.addEventListener('load', inicio);

function inicio() {
    let valor = prompt("Ingrese un valor de 3 digitos y 2 decimales (Ej: 123.45)");
    let patron = /^[0-9]{3}.[0-9]{2}$/;
    if (patron.test(valor)) {
        document.write("El valor es correcto: " + valor);
    } else {
        document.write("El valor es incorrecto: " + valor);
    }
}