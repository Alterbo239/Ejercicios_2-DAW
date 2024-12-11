let x, y, max;
let uno = 0, dos = 0, tres = 0, cua = 0;

uno = parseInt(uno);
dos = parseInt(dos);
tres = parseInt(tres);
cua = parseInt(cua);

max = parseInt(prompt("Cuantos puntos vas a procesar?"));

for (var i = 0; i < max; i++) {
    alert("Coordenadas " + (i+1));
    x = parseInt(prompt("Introduzca la coordenada X:"));
    y = parseInt(prompt("Introduzca la coordenada Y:"));

    if (x > 0 && y > 0) {
        uno++;
    } else if (x > 0 && y < 0) {
        dos++;
    } else if (x < 0 && y < 0) {
        tres++;
    } else {
        cua++;
    }
}

document.write("Coordenadas en el primer cuadrante: " + uno + "<br>");
document.write("Coordenadas en el segundo cuadrante: " + dos + "<br>");
document.write("Coordenadas en el tercer cuadrante: " + tres + "<br>");
document.write("Coordenadas en el cuarto cuadrante: " + cua + "<br>");