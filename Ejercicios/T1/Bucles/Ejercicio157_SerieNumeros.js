let num;
let neg = 0, pos = 0, mul = 0, par = 0;

neg = parseInt(neg);
pos = parseInt(pos);
mul = parseInt(mul);
par = parseInt(par);

for (var i = 0; i < 10; i++) {
    num = parseInt(prompt("Ingrese un valor: "));

    if (num < 0) {
        neg++;
    } else {
        pos++;
    }

    if (num%15 == 0) {
        mul++;
    }
    if (num%2 == 0) {
        par++;
    }
}

document.write("Numeros negativos: " + neg + "<br>");
document.write("Numeros positivos: " + pos + "<br>");
document.write("Numeros multiplos de 15: " + mul + "<br>");
document.write("Numeros pares: " + par);