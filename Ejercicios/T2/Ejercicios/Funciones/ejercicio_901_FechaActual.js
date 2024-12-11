window.addEventListener('load', inicio);

function inicio() {
    document.write(`La fecha de hoy es: ${fechaActual()}.`);
}

function fechaActual() {
    const fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
}