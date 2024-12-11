window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al iniciar la pagina.
 */
function inicio() {
    crearJuego();
    let boton = document.getElementsByTagName("input");
    let valor = 'x';
    let ganar = false;

    for (let i = 0; i < boton.length; i++) {
        boton[i].addEventListener('click', accion);        
    }

    /**
     * Funcion que crea el la tabla del juego.
     */
    function crearJuego() {
        for (let i = 0; i < 9; i++) {
            let bot = document.createElement("input"); //Creamos el elemento.
            bot.type = "button";
            bot.style = "width: 50px; height: 50px;";
            bot.id = "b"+i;
            bot.name = i; //Le aplicamos todas sus caracteristicas.

            if ((i+1)%3 == 0) {
                document.body.appendChild(bot);
                let br = document.createElement("br"); //Cada 3 botones, aplicamos un "br".
                document.body.appendChild(br);
            } else {
                document.body.appendChild(bot);
            }
        }
    }

    /**
     * Funcion que ejecuta la accion.
     */
    function accion() {
        if(this.value == 'x' || this.value == 'o') {

        } else {
            if(ganar) { //Si ha terminado el juego, no se continua.
                this.removeEventListener('click', accion);
                this.removeEventListener(ganador);
            } else {
                this.value = valor;
                this.name = valor;
                ganador();
            }
            //Por turnos ira cambiando el valor.
            if(valor == 'x') {
                valor = 'o';
            } else {
                valor = 'x';
            }
        }
        
    
        
    }

    /**
     * Funcion que determina quien ha ganado.
     */
    function ganador() {
        if(boton[0].name === boton[1].name && boton[0].name === boton[2].name) {
            alert("Gana el jugador " + valor.toUpperCase()); //Mostramos al ganador.
            ganar = true; //Cambiamos a "true" el booleano.
        }
        if(boton[0].name === boton[3].name && boton[0].name === boton[6].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }
        if(boton[0].name === boton[4].name && boton[0].name === boton[8].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }

        if(boton[1].name === boton[4].name && boton[1].name === boton[7].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }

        if(boton[2].name === boton[4].name && boton[2].name === boton[6].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }
        if(boton[2].name === boton[5].name && boton[2].name === boton[8].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }

        if(boton[3].name === boton[4].name && boton[3].name === boton[5].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }

        if(boton[6].name === boton[7].name && boton[6].name === boton[8].name) {
            alert("Gana el jugador " + valor.toUpperCase());
            ganar = true;
        }
    }
}