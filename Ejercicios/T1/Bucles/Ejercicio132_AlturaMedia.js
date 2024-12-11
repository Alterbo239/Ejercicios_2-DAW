let altura;
let suma = 0;
let n = 0;

suma = parseFloat(suma);
n = parseFloat(n);

while (n < 5) {
    altura = parseFloat(prompt("Ingrese una altura: (Ej: 1.76)")); //Ingresar separado por ".".
    suma += altura;
    n++;
}

let res = suma/n;

document.write("La altura media es de: " + res);