let x, y;

x = parseInt(prompt("Ingrese la coordenada X:"));
y = parseInt(prompt("Ingrese la coordenada Y:"));

if (x != 0 && y != 0) {
    if (x > 0 && y > 0) {
        alert("La coordenada esta en el primer cuadrante.");
    } else if (x < 0 && y > 0) {
        alert("La coordenada esta en el segundo cuadrante.");
    } else if (x < 0 && y < 0) {
        alert("La coordenada esta en el tercer cuadrante.");
    } else {
        alert("La coordenada esta en el cuarto cuadrante.");
    }
} else {
    alert("La coordenada no se encuentra en ningun cuadrante.");
}
