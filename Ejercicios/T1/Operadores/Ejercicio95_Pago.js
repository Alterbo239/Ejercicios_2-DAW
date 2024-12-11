let sueldo, any;

sueldo = parseInt(prompt("Ingrese su sueldo:"));
any = parseInt(prompt("Cuanto tiempo lleva en la empresa?"));

let final;

if (sueldo < 500  && any >= 10) {
    final = sueldo * 1.2;
    alert("El sueldo a pagar es: " + final);
} else if (sueldo < 500 && any < 10) {
    final = sueldo * 1.05;
    alert("El sueldo a pagar es: " + final);
} else {
    alert("Su sueldo esta bien.");
}