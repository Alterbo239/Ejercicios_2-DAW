let nota = 0;
let menor = 0,  mayor = 0;
let n = 1;

n = parseInt(n);
menor = parseInt(menor);
mayor = parseInt(mayor);

while(n <= 10) {
    while (nota <= 0 || nota > 10) {
        nota = parseInt(prompt("Ingrese su nota:"));
    }

    if (nota >= 7) {
        mayor++;
    } else {
        menor++;
    }

    nota = 0;
    n++;
}

document.write("Alumnos con un 7 o mas: " + mayor + "<br>");
document.write("Alumnos con menos de un 7: " + menor);