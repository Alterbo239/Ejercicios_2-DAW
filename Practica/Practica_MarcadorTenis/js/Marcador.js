/**
 * Clase que controla la aplicacion.
 * @author Alberto Zamora Landete
 * @since 30/10/2024
 * @version 1
 */

import Partido from "./Partido.js";

window.addEventListener('load', inicio);
//Creamos de manera global los arrays de estadisticas.
let mapa1 = new Map([["Ace", 0], ["1erServicio", 0], ["1erServicioReal", 0], ["2doServicio", 0], ["2doServicioReal", 0], ["DobleFalta", 0], ["GolpeGanador", 0], ["BreakPoint", 0]]);
let mapa2 = new Map([["Ace", 0], ["1erServicio", 0], ["1erServicioReal", 0], ["2doServicio", 0], ["2doServicioReal", 0], ["DobleFalta", 0], ["GolpeGanador", 0], ["BreakPoint", 0]]);


function inicio() {
    pideDatos();
    quienSaca();
    document.getElementById("j1").addEventListener("click", puntuacion);
    document.getElementById("j2").addEventListener("click", puntuacion);
}

/**
 * Funcion que pide los datos del partido.
 */
function pideDatos() {
    let info = new Partido();

    /*
    info.torneo = prompt("Introduce el nombre del torneo:");
    info.ronda = parseInt(prompt("Introduce la ronda del torneo:"));
    info.jugador1 = prompt("Introduce el nombre del jugador 1:");
    info.jugador2 = prompt("Introduce el nombre del jugador 2:");
    info.ranking1 = parseInt(prompt("Introduce el ranking del jugador 1:"));
    info.ranking2 = parseInt(prompt("Introduce el ranking del jugador 2:"));
    info.set = parseInt(prompt("Introduce el numero de sets a jugar:"));
    */
    
    document.getElementById("nombreTorneo").innerText = info.torneo + ". - Ronda: " + info.ronda;
    document.getElementById("nombre_J1").innerText = info.jugador1 + " #" + info.ranking1;
    document.getElementById("j1").value = info.jugador1;
    document.getElementById("nombre_J2").innerText = info.jugador2 + " #" + info.ranking2;
    document.getElementById("j2").value = info.jugador2;

    //Si el set es de 3, se ocultan los sets 4 y 5.
    if(info.set == 3) {
        for (let i = 4; i <= 5; i++) {
            document.getElementById("set"+i).innerText = "";
            document.getElementById("set"+i+"_j1").innerText = "";
            document.getElementById("set"+i+"_j2").innerText = "";
            document.getElementById("info_set"+i).style.display	 = "none";
        }
    }
}

////////////////////////////// Marcador de puntos //////////////////////////////
/**
 * Funcion que suma los puntos del marcador.
 */
function puntuacion() {
    let puntos = [0, 15, 30, 40, "A"]; //Puntos del marcador.
    let jugador = this.id[1]; //Pillamos el numero del jugador.

    //Pillamos la puntuación de ambos jugadores.
    let marcador = document.getElementById("puntuacionJ"+jugador);
    let sumado = false;

    let rival;
    if(jugador == 1) {
        rival = 2;
    } else {
        rival = 1;
    }
    let marcadorRival = document.getElementById("puntuacionJ"+rival);
    
    //Parte que suma los puntos al marcador.
    if(marcador.value == 40) {
        if(marcador.value == marcadorRival.value) {
            marcador.value = puntos[4]; //Si el marcador esta "iguales", el jugador pasa a tener "ventaja".
        } else if(marcadorRival.value == puntos[4]) {
            marcadorRival.value = puntos[3]; //Si el rival tiene "ventaja", pasan a estar "iguales".
        } else {
            sumarSet(jugador, rival); //En cualquier otro caso, se le suma un set al jugador.
        }
    } else {
        if(marcador.value == puntos[4]) {
            sumarSet(jugador, rival); //Si el jugador tiene ventaja y marca, se le suma el set.
        } else {
            //Si no, buscamos cual es su puntuacion y le sumamos puntos al marcador (0 -> 15 -> 30 -> 40).
            for (let i = 0; i < puntos.length && !sumado; i++) {
                if(marcador.value == puntos[i]) {
                    marcador.value = puntos[i+1];
                    sumado = true; //Marcamos que el marcador ha sido sumado y que no tiene que buscar mas.
                }
            }
        }
    }
    comprobarEstadisticas(jugador, rival);
    quienSaca(jugador);
    console.log();
}

////////////////////////////// Marcador de Sets //////////////////////////////
/**
 * Funcion que suma set.
 * @param {*} j Numero del jugador que ha marcado el puntos.
 * @param {*} r Numero del rival.
 */
function sumarSet(j, r) {
    document.getElementById("puntuacionJ1").value = 0;
    document.getElementById("puntuacionJ2").value = 0;

    let set = saberSet(); //Primero sabemos en que set estamos.

    //Cogemos los puntos marcados en el set del jugador y lo convertimos en numero.
    let puntoJuego = document.getElementById("set"+set+"_j"+j).innerText;
    let numero = Number(puntoJuego);
    
    numero++; //Sumamos un punto al Set.

    //Ahora, si el jugador tiene 6 puntos o mas, y la diferencia con el rival es de 2 o mas, entonces se le suma el punto de Juego.
    let puntoRival = document.getElementById("set"+set+"_j"+r).innerText;
    let numeroRival = Number(puntoRival);
    if(numero >= 6 && numero - numeroRival >= 2) {
        sumaJuego(j, set);
    }

    document.getElementById("set"+set+"_j"+j).innerText = numero; //Actualizamos el marcador.
}

/**
 * Funcion que encuentra el Set en el que se esta jugando.
 * @returns Numero del set que se esta jugando.
 */
function saberSet() {
    let set = parseInt(1); //Empieza por el 1º set.
    let esteSoy = false;

    const maximo = parseInt(5); //Maximo de 5 Sets.
    while(set <= maximo && !esteSoy) {
        //Pillamos los sets de ambos jugadores, los pasamos a numero y los ordenamos de mayor a menor.
        let setJ1 = document.getElementById("set"+set+"_j1").innerText;
        let setJ2 = document.getElementById("set"+set+"_j2").innerText;
        
        let setJ1N = Number(setJ1);
        let setJ2N = Number(setJ2);

        let mayor;
        let menor;
        if(setJ1N > setJ2N) {
            mayor = setJ1N;
            menor = setJ2N;
        } else {
            mayor = setJ2N;
            menor = setJ1N;
        }

        //Si el set ya ha terminado, comprobamos el siguiente set.
        if(mayor >= 6 && mayor - menor >= 2) {
            set++;
        } else {
            esteSoy = true; //Si no ha terminado, es que es este el Set que se esta jugando.
        }
    }
    //Devolvemos el numero del Set en el que estamos.
    return set;
}

////////////////////////////// Marcador de Juegos //////////////////////////////
/**
 * Funcion que suma un punto al juego del jugador que haya ganado el Set.
 * @param {*} j Numero del jugador que ha marcado el punto.
 * @param {*} s Numero del Set jugado.
 */
function sumaJuego(j, s) {
    let juego = document.getElementById("puntos"+j).innerText;
    let num = Number(juego);
    num++;
    document.getElementById("puntos"+j).innerText = num;

    document.getElementById("info_set"+s).disabled = false;
    document.getElementById("info_set"+s).addEventListener('click', mostrarInfo);

    estadisticasSet(s);
    ganador(j);
    //Funcion que ponga estadisticas en un boton.
}

////////////////////////////// Terminar Partida //////////////////////////////
/**
 * Funcion que comprueba si el juego a terminado o no.
 * @param {*} j Numero del jugador que ha ganado el punto.
 */
function ganador(j) {
    let puntosPartido;
    //Anotamos si la partida es a 3 o 5 juegos.
    if(document.getElementById("set5").innerText == "") {
        puntosPartido = parseInt(3); //Si el set 5 esta oculto, entonces es a 3.
    } else {        
        puntosPartido = parseInt(5);
    }
    //Cogemos los puntos del jugador.
    let puntosJugador = document.getElementById("puntos"+j).innerText;

    if(puntosPartido == 3) {
        if(puntosJugador == 2) {
            finPartida(j, puntosPartido); //Si la partida es a 3 juegos, si llega a 2, gana.
        }
    } else {
        if(puntosJugador == 3) {
            finPartida(j, puntosPartido); //Si la partida es a 5 juegos, si llega a 3, gana.
        }
    }
}

/**
 * Funcion que finaliza la partida.
 * @param {*} j Numero del jugador ganador.
 */
function finPartida(j, juegos) {
    let jugador = document.getElementById("j"+j).value;
    alert("Gano jugador " + jugador); //Anunciamos el nombre de la persona que ha ganado.

    //Desabilitamos los botones de los puntos.
    for (let i = 1; i <= 2; i++) {
        document.getElementById("j"+i).disabled = true;
        document.getElementById("j"+i).style.color = "white";
    }

    document.getElementById("estadisticas").style.display = "block";
    for (let i = 1; i <= saberSet(); i++) {
        document.getElementById("estadisticasSet"+i).style.display = "block";
    }
}

////////////////////////////// Estadisticas //////////////////////////////
/**
 * Funcion que muestra y oculta las estadisticas de un set.
 */
function mostrarInfo() {
    let id = this.id;
    let num = id[id.length-1]; //Cogemos el numero del boton del Set.
    
    let div = document.getElementById("estadisticasSet"+num); //Pillamos el "div" con las estadisticas.

    //Si esta visible, la ocultamos, sino, la mostramos.
    if(div.style.display != "none") {
        div.style.display = "none";
        let noEsconder = false;

        //Ademas miramos si hay otras estadisticas mostrandose para ocultar o no el div que las contiene.
        for (let i = 1; i <= saberSet() && !noEsconder; i++) {
            if(document.getElementById("estadisticasSet"+i).style.display == "block") {
                document.getElementById("estadisticas").style.display = "block";
                noEsconder = true;
            } else {
                document.getElementById("estadisticas").style.display = "none";
            }
        }
    } else {
        div.style.display = "block";
        document.getElementById("estadisticas").style.display = "block";
    }
}

/**
 * Funcion que determina quien saca ese punto de set.
 */
function quienSaca() {
    let set = saberSet(); //Primero sabemos en que set estamos.
    
    //Consguimos la informacion de los puntos del set.
    let puntos1 = document.getElementById("set"+set+"_j1").innerText;
    let puntos2 = document.getElementById("set"+set+"_j2").innerText;
    
    //Los pasamos a numero y los sumamos junto al numero del set.
    puntos1 = Number(puntos1);
    puntos2 = Number(puntos2);
    let total = puntos1 + puntos2 + set;

    //Si la suma es impar, saca el jugador 1, si es par, saca el jugador 2.
    if(total%2 != 0) {
        document.getElementById("ace1").disabled = false;
        document.getElementById("1ser1").disabled = false;
        document.getElementById("2ser1").disabled = false;
        document.getElementById("df1").disabled = false;
        document.getElementById("gg1").disabled = false;
        //Remarcamos al jugador para saber quien saca.
        document.getElementById("imagenJ1").style = "background-color: rgba(255, 255, 255, 0.1); border: solid white 3px";

        document.getElementById("ace2").disabled = true;
        document.getElementById("1ser2").disabled = true;
        document.getElementById("2ser2").disabled = true;
        document.getElementById("df2").disabled = true;
        document.getElementById("gg2").disabled = true;
        //Desmarcamos al que no saca.
        document.getElementById("imagenJ2").style = "";
    } else {
        document.getElementById("ace1").disabled = true;
        document.getElementById("1ser1").disabled = true;
        document.getElementById("2ser1").disabled = true;
        document.getElementById("df1").disabled = true;
        document.getElementById("gg1").disabled = true;
        //Desmarcamos al que no saca.
        document.getElementById("imagenJ1").style = "";

        document.getElementById("ace2").disabled = false;
        document.getElementById("1ser2").disabled = false;
        document.getElementById("2ser2").disabled = false;
        document.getElementById("df2").disabled = false;
        document.getElementById("gg2").disabled = false;
        //Remarcamos al jugador para saber quien saca.
        document.getElementById("imagenJ2").style = "background-color: rgba(255, 255, 255, 0.1); border: solid white 3px";
    }
    //Si saca uno, no tiene sentido poder marcar cosas del saque en el segundo.
}

/**
 * Funcion que comprueba que estadisticas estan marcadas a la hora de hacer un punto.
 * @param {*} jugador Numero del jugador que ha marcado el punto.
 * @param {*} rival Numero del rival.
 */
function comprobarEstadisticas(jugador, rival) {
    let estadisticas;
    let estadisticasRival;
    
    //Asociamos los arrays de estadisticas a ambos jugadores.
    if(jugador == 1) {
        estadisticas = mapa1;
        estadisticasRival = mapa2;
    } else {
        estadisticas = mapa2;
        estadisticasRival = mapa1;
    }

    //Comprobar y sumar los "ace".
    if(document.getElementById("ace"+jugador).checked) {
        estadisticas.set("Ace", estadisticas.get("Ace") + 1); //Se suma 1 si esta marcado.
        document.getElementById("ace"+jugador).checked = false;
    }

    //Comprobar y sumar 1er servicio.
    if(document.getElementById("1ser"+jugador).checked) {
        estadisticas.set("1erServicio", estadisticas.get("1erServicio") + 1);
        estadisticas.set("1erServicioReal", estadisticas.get("1erServicioReal") + 1); //Si el 1er servicio ha sido marcado por el que saca, se suman ambas estadisticas.
        document.getElementById("1ser"+jugador).checked = false;
    } else if (document.getElementById("1ser"+rival).checked) {
        estadisticasRival.set("1erServicioReal", estadisticasRival.get("1erServicioReal") + 1); //Si el servicio lo ha marcado el rival, solo sumamos el 1er servicio, pero no el ganado.
        document.getElementById("1ser"+rival).checked = false;
    }
    //Comprobar y sumar 2do servicio. (Misma explicacion para el 2do servicio).
    if(document.getElementById("2ser"+jugador).checked) {
        estadisticas.set("2doServicio", estadisticas.get("2doServicio") + 1);
        estadisticas.set("2doServicioReal", estadisticas.get("2doServicioReal") + 1);
        document.getElementById("2ser"+jugador).checked = false;
    } else if (document.getElementById("2ser"+rival).checked) {
        estadisticasRival.set("2doServicioReal", estadisticasRival.get("2doServicioReal") + 1);
        document.getElementById("2ser"+rival).checked = false;
    }

    //Comprobar y sumar dobles faltas.
    if (document.getElementById("df"+rival).checked) {
        estadisticasRival.set("DobleFalta", estadisticasRival.get("DobleFalta") + 1); //Si ganas punto por Doble Falta, es que le tienes que sumar al rival la estadistica.
        document.getElementById("df"+rival).checked = false;
    }
    
    //Comprobar y sumar los "Golpes ganadores".
    if(document.getElementById("gg"+jugador).checked) {
        estadisticas.set("GolpeGanador", estadisticas.get("GolpeGanador") + 1); //Si esta marcado, sumamos 1.
        document.getElementById("gg"+jugador).checked = false;
    } else if(document.getElementById("gg"+rival).checked) {
        estadisticas.set("GolpeGanador", estadisticas.get("GolpeGanador") + 1); //Si esta marcado, sumamos 1.
        document.getElementById("gg"+rival).checked = false;
    }

    //Comprobar y sumar Break Points.
    let puntos1 = document.getElementById("puntuacionJ"+jugador).value;
    let puntos2 = document.getElementById("puntuacionJ"+rival).value;

    if(puntos1 == 40 && (puntos2 != 40 && puntos2 != "A")) { //Si el jugador tiene 40 puntos, y el rival no está a 40 ni con Ventaja, sumamos 1 al Break Point.
        estadisticas.set("BreakPoint", estadisticas.get("BreakPoint") + 1);
    } else if (puntos1 == "A") {
        estadisticas.set("BreakPoint", estadisticas.get("BreakPoint") + 1); //Si el jugador esta con ventaja, se le suma el Break Point.
    }
    //Lo mismo pero con el rival.
    if(puntos2 == 40 && (puntos1 != 40 && puntos1 != "A")) {
        estadisticasRival.set("BreakPoint", estadisticasRival.get("BreakPoint") + 1);
    } else if (puntos2 == "A") {
        estadisticasRival.set("BreakPoint", estadisticasRival.get("BreakPoint") + 1);
    }
    
    //Por ultimo actualizamos los Mapas de estadisticas.
    if(jugador == 1) {
        mapa1 = estadisticas;
        mapa2 = estadisticasRival;
    } else {
        mapa2 = estadisticas;
        mapa1 = estadisticasRival;
    }
}

/**
 * Funcion que crea las estadisticas de un Set.
 * @param {*} set Numero del set que se acaba de ganar.
 */
function estadisticasSet(set) {
    //Pillamos el Div que tendra todas las estadisticas de los sets.
    let divGeneral = document.getElementById("estadisticas");

    //Se crea el Div que tendra la informacion.
    let divSet = document.createElement("div");
    divSet.id = "estadisticasSet"+set;
    divSet.style.display = "none";

    //Creamos tambien el div de la estadistica concreta del Set.
    let titulo = document.createElement("div");
    let tituloTexto = document.createElement("h2");
    tituloTexto.className = "jugador check";
    tituloTexto.innerHTML = "Set " + set;
    titulo.appendChild(tituloTexto);
    divSet.appendChild(titulo);

    //Declaramos las variables del mapa para recoger estadisticas y el Div del jugador.
    let mapa;
    let divJ;

    for (let i = 1; i <= 2; i++) {
        if(i == 1) {
            mapa = mapa1; //Recogemos la info del jugador 1 en la primera pasada.
        } else {
            mapa = mapa2; //Recogemos la info del jugador 1 en la segunda pasada.
        }

        //Le damos estilo al div del jugador.
        divJ = document.createElement("div");
        divJ.className = "jugador check";

        //Creamos el texto del jugador.
        let jugador = document.createElement("h3");
        jugador.innerText = "Jugador " + i;

        //Creamos y ponemos la informacion de los Ace.
        let ace = document.createElement("p");
        ace.innerHTML = "Ace: " + mapa.get("Ace");
        
        //Creamos y ponemos la informacion de los primeros servicios.
        let servicio1 = document.createElement("p");
        servicio1.innerHTML = "1er Servicio: " + mapa.get("1erServicio") + "/" + mapa.get("1erServicioReal") + " (" + (mapa.get("1erServicio")*100/mapa.get("1erServicioReal")) + "%)";
        
        //Creamos y ponemos la informacion de los segundos servicios.
        let servicio2 = document.createElement("p");
        servicio2.innerHTML = "2do Servicio: " + mapa.get("2doServicio") + "/" + mapa.get("2doServicioReal") + " (" + (mapa.get("2doServicio")*100/mapa.get("2doServicioReal")) + "%)";

        //Creamos y ponemos la informacion de las dobles faltas.
        let dobleFalta = document.createElement("p");
        dobleFalta.innerHTML = "Dobles Faltas: " + mapa.get("DobleFalta");

        //Creamos y ponemos la informacion de los golpes ganadores.
        let golpeGanador = document.createElement("p");
        golpeGanador.innerHTML = "Golpe Ganador: " + mapa.get("GolpeGanador");

        //Creamos y ponemos la informacion de los break points.
        let breakPoint = document.createElement("p");
        breakPoint.innerHTML = "Break Points: " + mapa.get("BreakPoint");

        //Introducimos todo al div del jugador.
        divJ.appendChild(jugador);
        divJ.appendChild(ace);
        divJ.appendChild(servicio1);
        divJ.appendChild(servicio2);
        divJ.appendChild(dobleFalta);
        divJ.appendChild(golpeGanador);
        divJ.appendChild(breakPoint);
        
        divSet.appendChild(divJ); //Y todo el div del jugador al del Set.

        //Ponemos las estadisticas en 0 para el siguiente Set.
        mapa.set("Ace", 0);
        mapa.set("1erServicio", 0);
        mapa.set("1erServicioReal", 0);
        mapa.set("2doServicio", 0);
        mapa.set("2doServicioReal", 0);
        mapa.set("DobleFalta", 0);
        mapa.set("GolpeGanador", 0);
        mapa.set("BreakPoint", 0);
        if(i == 1) {
            mapa1 = mapa; //Introducimos todo de 0 al mapa general.
        } else {
            mapa2 = mapa; //Introducimos todo de 0 al mapa general.
        }
    }
    divGeneral.appendChild(divSet); //Por ultimo introducimos el div del set al div de las estadisticas.
}