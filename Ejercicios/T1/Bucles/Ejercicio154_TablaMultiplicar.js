let num = 0, max = 12;

num = parseInt(num);
max = parseInt(max);

while (num < 1 || num > 10) {
    num = parseInt(prompt("Ingrese un numero del 1 al 10: "));
}

for  (var i = 1; i <= max; i++) {
    document.write(num + " x " + i + " = " + (num*i) + "<br>");
}