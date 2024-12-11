window.addEventListener('load', inicio);

function inicio() {
    const operacion = {
        valor1: 10,
        valor2: 7,
        sumar() {
            return this.valor1+this.valor2;
        },
        restar() {
            return this.valor1-this.valor2;
        }
    }

    document.write(operacion.sumar());
    document.write('<br>');
    document.write(operacion.restar());
}

//Array.filter(elemento => elemento % 2); //Filtra los numeros pares.