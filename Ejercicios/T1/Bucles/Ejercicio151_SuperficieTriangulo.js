let base, alt;
let mayor = 0;

mayor = parseInt(mayor);

for (var i = 0; i < 3; i++) {
    base = parseFloat(prompt("Ingrese la base de un triangulo:"));
    alt = parseFloat(prompt("Ingrese la altura de un triangulo:"));
    let sup = base * alt / 2;

    if (sup > 12) {
        mayor++;
    }

    document.write("Triangulo " + (i+1) +  " - Altura: " + alt + ". Base: " + base + ". Superficie: " + sup + ". <br>");
}

document.write("<br> Cantidad de triangulos con superficie mayor a 12: " + mayor);