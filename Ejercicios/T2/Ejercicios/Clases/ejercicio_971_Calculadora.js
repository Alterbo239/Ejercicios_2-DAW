/**
 * @author Alberto Zamora Landete
 * @since 21/10/2024
 * @version 1
 */
window.addEventListener('load', inicio);

function inicio() {
    class Calculadora {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
            this.res = document.getElementById("res"); //Se coge el input para modificarlo al realizar operaciones.
        }

        sumar() {
            this.res.value = this.num1 + this.num2; //Suma los 2 numeros.
        }

        restar() {
            this.res.value = this.num1 - this.num2; //Resta los 2 numeros.
        }

        multiplicar() {
            this.res.value = this.num1 * this.num2; //Muliplica los 2 numeros.
        }

        dividir() {
            this.res.value = this.num1 / this.num2; //Divide los 2 numeros.
        }
    }

    class CalculadoraCientifica extends Calculadora {
        constructor(num1, num2) {
            super(num1, num2);
        }

        potenciar() {
            this.res.value = Math.pow(this.num1, 2); //Potencia al cuadrado el primer numero.
        }

        racionar() {
            this.res.value = Math.sqrt(this.num1); //Realiza la raiz cuadrada del primer numero.
        }
    }

    //Declaramos los dos numeros.
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    //Declaramos la calculadora.
    let calculadora = new CalculadoraCientifica(num1, num2);

    /**
     * Funcion que actualiza los numeros que se van a operar.
     */
    function actualziar() {
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);

        calculadora = new CalculadoraCientifica(num1, num2);
    }

    //Agregamos las funciones a los botones.
    document.getElementById("sumar").addEventListener('click', () => calculadora.sumar());
    document.getElementById("restar").addEventListener('click', () => calculadora.restar());
    document.getElementById("mult").addEventListener('click', () => calculadora.multiplicar());
    document.getElementById("divi").addEventListener('click', () => calculadora.dividir());

    document.getElementById("potenciar").addEventListener('click', () => calculadora.potenciar());
    document.getElementById("raiz").addEventListener('click', () => calculadora.racionar());

    //Cada vez que se cambie el numero del input, se actualizan los datos de la calculadora interna.
    document.getElementById("num1").addEventListener('change', actualziar);
    document.getElementById("num2").addEventListener('change', actualziar);
}