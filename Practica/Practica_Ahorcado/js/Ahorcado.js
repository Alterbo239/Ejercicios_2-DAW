/**
 * @author Alberto Zamora Landete
 * @since 10/10/2024. Entregar -> 20/10/2024
 * @version 2
 * Crear un juego del ahorcado.
 */
window.addEventListener('load', inicio);

/**
 * Funcion que se ejecuta al cargar la pagina.
 */
function inicio() {
    document.getElementById("comenzar").addEventListener('click', comienzo);
    document.getElementById("escribir").addEventListener('keydown', comprobarLetraTeclado);
}

///// Funciones para comenzar el juego /////
/**
 * Funcion para empezar la partida, prepara el documento para que se vea en la seccion "jugar".
 */
function comienzo() {
    let body = document.getElementById("body");
    let lifes = document.getElementById("lifes");
    let Botonesletras = document.getElementById("botonesLetras");
    let juego = document.getElementById("juego");
    let head = document.getElementById("empezar");
    let footer = document.getElementById("creador");

    body.className = "bg-light";
    lifes.style.display = "block";
    Botonesletras.style.display = "block";
    juego.style.display = "block";
    
    head.style.display = "none";
    footer.style.display = "none";

    //Funciones que generan el juego.
    generarVidas();
    generarBotones();
    generarPalabra();

    //Pillamos todos los botones de las letras y a cada uno le asignamos la funcion "comprobarLetra()".
    let letras = document.getElementsByTagName("button"); 

    for (let i = 0; i < letras.length; i++) {
        letras[i].addEventListener('click', comprobarLetraBoton);
    }    
}

/**
 * Funcion que genera los botones en la pantalla.
 */
function generarBotones() {
    //Primera fila: 10 / Segunda fila: 9 / Tecera fila: 7.
    let botonesLetras = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m"];
    let fila1 = parseInt(10);
    let fila2 = parseInt(10);
    let fila3 = parseInt(7);

    //Generamos los elementos para que no den problemas a la hora de utilizarlos luego.
    let divBotones;
    let divEntero = document.getElementById("divBotones");
    
    for (let i = 0; i < botonesLetras.length; i++) {
        //Por cada fila creamos un div con esas caracteristicas.
        if (i == 0 || i == fila1 || i == fila1+fila2) {
            divBotones = document.createElement("div");
            divBotones.className = "col-lg-8 text-center";
        }

        //Creamos un boton cada vez con el valor y el "id" de la posicion del arraylist.
        let botonLetra = document.createElement("button");
        botonLetra.id = botonesLetras[i];
        botonLetra.innerText = botonesLetras[i].toLocaleUpperCase();
        botonLetra.className = "letra btn btn-primary btn-lg";
        botonLetra.style = "margin: 2px";

        //Introducimos el boton al div.
        divBotones.appendChild(botonLetra);

        //Cada vez que acabe la fila, introduciremos el div creado al div que contiene el input y las pistas.
        if (i == fila1-1 || i == fila1+fila2-1 || i == fila1+fila2+fila3-1) {
            divEntero.appendChild(divBotones);
        }
    }
}

/**
 * Funcion que genera una palabra aleatoria y la oculta con "-".
 */
function generarPalabra() {
    //Array de palabras para jugar. (18 palabras).
    let palabras = ["natacion", "logaritmo", "girasol", "plesiosaurio", "paella", "teclado", "mario", "pringles", "playa", "valencia", "restaurante", "miope", "bachiller", "boligrafo", "esternocleidomastoideo", "extremo", "zorro", "xilofono", "mañana"];
    let tematica = ["deporte", "matematicas", "flor", "dinosaurio", "comida", "informatica", "nombre", "marca", "zona", "ciudad", "establecimiento", "caracteristica", "estudios", "utensilio", "musculo", "posicion", "animal", "instrumento", "momento"];
    let aleatorio = Math.floor(Math.random() * (palabras.length));

    //Generamos la palabra oculta.
    let oculto = "";
    for (let i = 0; i < palabras[aleatorio].length; i++) {
        oculto += "-";
    }

    //Generamos una palabra visible que sera la oculta, y una invisible que sera la real.
    let palabra = document.getElementById("laPalabra");
    palabra.innerText = oculto;

    let palabraReal = document.getElementById("palabraFantasma");
    palabraReal.innerText = palabras[aleatorio];

    let tema = document.getElementById("tema");
    tema.innerText = tematica[aleatorio];
}

///// Funciones para comprobar letras. /////
/**
 * Funcion que comprobara si la letra esta en la palabra real (Por boton).
 */
function comprobarLetraBoton() {
    this.disabled = true;
    let esta = false;

    let palabraOculta = document.getElementById("laPalabra");
    let palabraReal = document.getElementById("palabraFantasma").innerText;

    //Guardamos la letra introducida y la palabra oculta.
    let letra = this.innerText.toLocaleLowerCase();
    let cambio = palabraOculta.innerText;
    
    //Comprobamos si la letra esta en el array y cambiamos la letra si fuese necesario.
    for (let i = 0; i < palabraReal.length; i++) {
        if(palabraReal[i] == letra) {
            esta = true;
            let array = cambio.split("");
            array[i] = letra;
            cambio = array.join("");
        }
    }

    //Dependiendo de si la letra esta, restamos vidas o actualizamos la palabra.
    if(!esta) {
        restaVida();
        this.className = "btn btn-danger btn-lg";
    } else {        
        palabraOculta.innerText = cambio;
        this.className = "btn btn-success btn-lg";
        comprobarFinal();
    }
}

/**
 * Funcion que comprobara si la letra esta en la palabra. (Introducida por teclado).
 * @param {*} tecla //Tecla pulsada en la caja de texto.
 */
function comprobarLetraTeclado(tecla) {
    //Si la tecla a sido "enter" (13), entramos a la comprobacion.
    if(tecla.keyCode == 13) {
        let letraEnviada = document.getElementById("escribir").value; //Pillamos el valor de la letra
        let boton = document.getElementById(letraEnviada.toLocaleLowerCase());

        //Si la letra no ha salido, entonces entramos.
        if(!boton.disabled) {
            boton.disabled = true;
            let esta = false;
            
            let palabraOculta = document.getElementById("laPalabra");
            let palabraReal = document.getElementById("palabraFantasma").innerText;

            let letra = letraEnviada.toLocaleLowerCase();
            let cambio = palabraOculta.innerText;
            
            for (let i = 0; i < palabraReal.length; i++) {
                if(palabraReal[i] == letra) {
                    esta = true;
                    let array = cambio.split("");
                    array[i] = letra;
                    cambio = array.join("");
                }
            }

            if(!esta) {
                restaVida();
                boton.className = "btn btn-danger btn-lg";
            } else {        
                palabraOculta.innerText = cambio;
                boton.className = "btn btn-success btn-lg";
                comprobarFinal();
            }
        } else {
            alert("La letra '" + letraEnviada + "' ya ha salido. \n (Pulse 'enter' para saltar el mensaje.)");
        }
    }

    //Reiniciamos el valor del texto.
    document.getElementById("escribir").value = "";
}

///// Funciones relacionadas con las vidas. /////
/**
 * Funcion que genera las vidas del jugador.
 */
function generarVidas() {
    let numVida = document.getElementById("numVidas").innerText;

    let vidas = "";

    //Por cada vida que nos quede, mostraremos un ❤️.
    for (let i = 0; i < numVida; i++) {
        vidas += "❤️";
    }

    document.getElementById("vidas").innerText = vidas;
}

/**
 * Funcion que resta vidas al equivocarte en una palabra.
 */
function restaVida() {
    let vida = document.getElementById("numVidas");
    let numero = vida.innerText;

    //Restamos en 1 el numero de vidas y lo actualizamos.
    numero--;
    vida.innerText = numero;
    generarVidas(); 

    //Comprobamos si queda alguna vida restante.
    if(numero <= 0) {
        finJuego();
    }
}

///// Funciones relacionadas con el final del juego. /////
/**
 * Funcion que comprueba si a la palabra oculta le queda alguna letra oculta aun.
 */
function comprobarFinal() {
    let comprobar = document.getElementById("laPalabra").innerText;
    let fin = true; //Booleano que comprueba si hay o no una letra.

    //Si alguna letra esta oculta, el juego continua.
    for (let i = 0; i < comprobar.length && fin; i++) {
        if(comprobar[i] == "-") {
            fin = false;
        }
    }

    //Si todas las letras estan desveladas, terminamos el juego.
    if(fin) {
        finJuego();
    }
}

/**
 * Funcion que muestra el fin del juego.
 */
function finJuego() {
    //Elementos de la pagina.
    let body = document.getElementById("body");
    let Botonesletras = document.getElementById("botonesLetras");
    let juego = document.getElementById("juego");

    //Palabra oculta.
    let palabraOculta = document.getElementById("laPalabra");
    let palabraReal = document.getElementById("palabraFantasma");

    Botonesletras.style.display = "none";

    //Tema de la palabra.
    let tema = document.getElementById("tema");
    tema.hidden = true;

    //Creamos un div.
    let div = document.createElement("div");
    div.className = "container px-4 text-center";
    div.style = "margin-top: 100px";

    //Creamos un texto que indica el fin de la partida.
    let fin = document.createElement("h2");

    //Creamos otro texto que pregunta si queremos volver a jugar.
    let h2 = document.createElement("h2");
    h2.innerHTML = "Quieres volver a jugar?";
    h2.style = "margin-top: 50px";

    //Creamos un boton de reiniciar la partida.
    let reiniciar = document.createElement("button");
    reiniciar.id = "reiniciar";
    reiniciar.innerHTML = "Reiniciar";
    reiniciar.className = "reiniciar btn btn-light btn-outline-dark btn-lg";

    //Creamos una imagen.
    let imagen = document.createElement("img");
    imagen.style = "width: 10REM; margin-top: -100px; margin-bottom: 25px";

    //Comprobamos si el fin del juego se debe al haber ganado o por haber perdido.
    let finalBueno;
    if(document.getElementById("numVidas").innerText > 0) {
        finalBueno = true; //Final bueno.
    } else {
        finalBueno = false; //Final malo.
    }

    //Una vez comprobado, procedemos a finalizar el juego.
    if(finalBueno) {
        body.className = "bg-success";
        juego.className = "bg-success bg-gradient";
        fin.innerHTML = "Has ganado :D"; //Texto ganador.
        imagen.src = "imagenes/Ganar.png";
    } else {
        body.className = "bg-danger";
        juego.className = "bg-danger bg-gradient";
        fin.innerHTML = "Has perdido :("; //Texto perdedor.
        imagen.src = "imagenes/Perder.png";
        
        //Si ha fallado, le desvelamos la palabra real.
        palabraOculta.innerText = palabraReal.innerText;
    }

    //Agregamos todos los textos y el boton a un div que se agregara al body.
    div.appendChild(imagen);
    div.appendChild(fin);
    div.appendChild(h2);
    div.appendChild(reiniciar);
    document.body.appendChild(div);

    document.getElementById("reiniciar").addEventListener('click', recargar); //Agregamos la funcion de reiniciar al boton.
}

//Funcion para recargar la pagina.
function recargar() {
    location.reload();
}