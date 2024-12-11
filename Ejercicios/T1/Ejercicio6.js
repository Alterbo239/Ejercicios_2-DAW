let dni;
let letra;
let valido = false;

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

while (!valido) {
    dni = parseInt(prompt("Escriba su numero del DNI:"));

    if (dni <= 99999999 && dni >= 0) {
        valido = true;
    } else {
        alert("DNI no valido.");
    }
}

letra = prompt("Escriba su letra del DNI:");
letra = letra.toUpperCase(); //Para que no hayan fallos por poner letra minuscula.

let resto = dni%23;

if (letra == letras[resto]) {
    document.write("DNI correcto: " + dni + letras[resto]); //Si la letra introducida coincide con la calculada, esta todo bien.
} else {
    document.write("Las letras del DNI indicado y el resultado no coinciden."); //Si no coinciden, no es correcto.
}