window.addEventListener('load', inicio);

function inicio() {
    const orden = ordenar(13, 5, 19, 7);
    document.write(orden.toString());
}

//Mirar mejor
function ordenar(...lista) {
    return lista.sort((n1, n2) => {
            return n1-n2; //Si la resta es positiva, n2 es menor y lo ordena, sino, n1 es menor y ya esta ordenado.
        }
    );
}