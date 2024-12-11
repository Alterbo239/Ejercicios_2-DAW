window.addEventListener('load', inicio);

function inicio() {
    //Creamos un objeto de tipo "Participante".
    const participante = {
        nombre: "Federico", //Variable nombre.
        puntos: 0, //Variable puntos.
        //Funcion que imprime los valores del participante.
        imprimir() {
            document.write(this.nombre + "<br>");
            document.write(this.puntos + "<br>");
        }
        ,
        //Funcion que aumenta los puntos introducidos.
        aumentar(cant) {
            this.puntos += cant;
        }
        ,
        //Funcion que verifica si el participante a ganado el juego.
        ganar() {
            if(this.puntos > 1000) {
                document.write("Ha ganado!");
            }
        }
    };

    let num = parseInt(0);
    let suma = parseInt(0);
    participante.imprimir();
    while(suma <= 1000) {
        num = parseInt(prompt("Introduzca los puntos ganados:"));
        suma += num;
        participante.aumentar(num);
        participante.imprimir();
        participante.ganar();
    }
}