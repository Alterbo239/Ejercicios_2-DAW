window.addEventListener('load', inicio);

function inicio() {
    let num = parseInt(prompt("Ingrese un numero maximo:"));
    
    const numAleatorio = valor => {
        return Math.floor(Math.random() * valor) + 1;
    }

    document.write(`Un numero aleatorio entre 1 y ${num} es: ${numAleatorio(num)}`);
}