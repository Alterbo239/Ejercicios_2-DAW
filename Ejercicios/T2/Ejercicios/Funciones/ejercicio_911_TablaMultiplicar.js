window.addEventListener('load', inicio);

function inicio() {
    tabla();
    document.write(`<br>`);
    tabla(5);
    document.write(`<br>`);
    tabla(3, 8);
}

function tabla(num = 2, cant = 10) {
    for (let i = 0; i <= cant; i++) {
        document.write(`${num} * ${i} = ${num*i}<br>`);
    }
}