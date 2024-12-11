window.addEventListener('load', inicio);

function inicio() {
    let coordenada = prompt("Ingrese una coordenada: (Ej: 111,111)");
    let patron = /^[0-9]{1,3},[0-9]{1,3}$/;
    if(patron.test(coordenada)) {
        document.write("Eliminando terreno asociado a la coordenada: " + coordenada + ".");
    } else {
        document.write("Esa coordenada no se encuentra disponible.");
    }
}