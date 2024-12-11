/**
 * @author Alberto Zamora Landete
 * @since 04/12/2024
 * @version 1
 */

window.addEventListener('load', inicio);
//Variable global de los emblemas que puedes tener.
let emblemas = new Map([
    ["valor", 0],
    ["amistad", 0],
    ["afecto", 0],
    ["conocimiento", 0],
    ["inocencia", 0],
    ["sinceridad", 0],
    ["esperanza", 0]
]);
let descripcion = new Map([
    ["valor", "El valor representa la capacidad de enfrentar el miedo y los desafíos. Eres alguien que no duda en defender lo que cree correcto, demostrando fuerza interior y determinación. Los desafíos no te intimidan, te motivan a crecer y superar tus obstáculos."],
    ["amistad", "La amistad simboliza lealtad y conexión con los demás. Eres una persona que valora las relaciones y que siempre está para apoyar a quienes te rodean. Tu habilidad para fortalecer lazos emocionales te convierte en un pilar de confianza."],
    ["afecto", "El afecto es el emblema del amor y empatía hacia los demás. Posees un corazón cálido y una gran capacidad para cuidar de quienes te rodean, inspiras ternura y creas un entorno seguro y amoroso donde las personas se sienten comprendidas y queridas."],
    ["conocimiento", "El conocimiento es la esencia de la curiosidad y capacidad para analizar el mundo. Te destacas por tu mente inquieta y por el deseo constante de aprender. Cada experiencia es una oportunidad para crecer intelectualmente, tu enfoque lógico te convierte en una persona sabia y confiable."],
    ["inocencia", "La inocencia refleja la pureza de tus intenciones y la alegría con la que ves la vida. Tienes una naturaleza optimista y un corazón que busca el bien en todas las personas y acciones, tu perspectiva ilumina a quienes te rodean y les recuerda la importancia de la sencillez."],
    ["sinceridad", "La sinceridad es el reflejo de tu honestidad y compromiso con la verdad, eres una persona transparente y auténtica, que siempre dice lo que piensa con respeto. Los demás valoran tu capacidad de hablar con el corazón, tus palabras suelen servir de guía en situaciones confusas."],
    ["esperanza", "La esperanza es un símbolo de optimismo y fe en un futuro mejor. Tienes una energía positiva que inspira a quienes te rodean, incluso en los momentos más difíciles. Eres la luz en la oscuridad, alguien que nunca pierde la confianza en que las cosas irán a mejor siempre."],
]);

/**
 * Funcion que se ejecuta al iniciar.
 */
function inicio() {
    document.getElementById("comenzar").addEventListener('click', comenzar);
    document.getElementById("cp").addEventListener('input', validarCP);
    document.getElementById("telefono").addEventListener('input', validarTel);
    document.getElementById("terminar").addEventListener('click', terminar);
}

/**
 * Funcion que permite comenzar el test.
 */
function comenzar() {
    //Hasta que no estén los valores introducidos correctamente, no se empieza.
    if(document.getElementById("datos").checkValidity()) {
        document.getElementById("formulario").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("test").style.display = "block";
    }
}

/**
 * Funcion que valida el Codigo Postal.
 */
function validarCP() {
    let patron = /^\d{5}$/; //Patron que detecta si el input tiene 5 dígitos.
    let codigo = document.getElementById("cp");
    //Test de la validacion.
    if(patron.test(codigo.value)) {
        codigo.setCustomValidity("");
    } else {
        codigo.setCustomValidity("El codigo postal no es válido");
    }
}

/**
 * Funcion que valida el Teléfono.
 */
function validarTel() {
    let patron = /^\d{9}$/; //Patron que detecta si el input tiene 9 dígitos.
    let numTel = document.getElementById("telefono");
    //Test de la validacion.
    if(patron.test(numTel.value)) {
        numTel.setCustomValidity("");
    } else {
        numTel.setCustomValidity("El codigo postal no es válido");
    }
}

/**
 * Funcion que termina el test si todo esta bien.
 */
function terminar() {
    //Primero validamos que el formulario este listo (todas las respuestas respondidas).
    if(document.getElementById("respuestas").checkValidity()) {
        //Luego validamos que los Checkbox tengan al menos 2 opciones seleccionadas cada uno.
        if(validar()) {
            sumaPuntos();
            let emblemaResultado = resultado();
            document.getElementById("test").style.display = "none";
            document.getElementById("resultado").style.display = "block";

            document.getElementById("nombre-resultado").innerHTML = document.getElementById("nombre").value;
            document.getElementById("emblema-resultado").innerHTML = emblemaResultado;
            document.getElementById("emblema-imagen").src = "./sources/" + emblemaResultado + ".png";
            
            let datos = document.getElementById("datos-formulario");
            datos.innerHTML = "Con email: " + document.getElementById("email").value + ".<br> Teléfono: " + document.getElementById("telefono").value + ".<br> Y con codigo postal: " + document.getElementById("cp").value + ".<br>";

            let desc = document.getElementById("descripcion-resultado");
            desc.innerHTML = descripcion.get(emblemaResultado);

            let premonicion = document.getElementById("premonicion");
            premonicion = premonicion.options[premonicion.selectedIndex].value;
            if(premonicion == emblemaResultado) {
                document.getElementById("premonicion-resultado").innerHTML = "Usted había elegido " + premonicion + ", ha acertado.";
            } else {
                document.getElementById("premonicion-resultado").innerHTML = "Usted había elegido " + premonicion + ", por desgracia no acertó.";
            }

            console.log(emblemas);
        } else {
            alert("Seleccione al menos 2 respuestas en las preguntas de checkbox."); //Respuesta dada si falla la validacion de los checkbox.
        }
    }
}

/**
 * Funcion que valida si los Checkbox se han respondido correctamente.
 * @returns Validacion.
 */
function validar() {
    let pregunta = parseInt(2); //Numero de la pregunta.
    let correcto = true; //Validacion.

    while(pregunta <= 3 && correcto) {
        let check = document.getElementsByName("pregunta"+pregunta);
        let contador = parseInt(0);
        for (let i = 0; i < check.length; i++) {
            if(check[i].checked) {
                contador++;
            }
        }
        //Si no hay 2 o más valores seleccionados, ponemos en "false" la validacion y la devolvemos.
        if(contador < 2) {
            correcto = false;
        }
        pregunta++;
    }
    
    return correcto;
}

/**
 * Funcion que suma puntos de las preguntas.
 */
function sumaPuntos() {
    let preguntas = document.getElementsByTagName("select");
    
    //Pillamos los Select y dependiendo de su respuesta le sumamos 1 a la puntuacion de los emblemas.
    for (let i = 1; i < preguntas.length; i++) {
        let respuesta = preguntas[i].options[preguntas[i].selectedIndex].value;
        emblemas.set(respuesta, emblemas.get(respuesta) + 1);
    }

    //Lo mismo con los Checkbox.
    for (let i = 2; i <= 3; i++) {
        let check = document.getElementsByName("pregunta"+i);
        for (let j = 0; j < check.length; j++) {
            if(check[j].checked) {
                emblemas.set(check[j].value, emblemas.get(check[j].value) + 1);
            }
        }
    }

    //Ahora pillamos el numero introducido.
    let cantidad = parseInt(document.getElementById("pregunta6").value);
    let emblema = "";

    //Le asignamos un emblema por cada respuesta (algoritmo inventado).
    if(cantidad <= 3) {
        emblema = "inocencia";
    } else if (cantidad >= 12) {
        emblema = "valor";
    } else {
        emblema = "sinceridad";
    }
    emblemas.set(emblema, emblemas.get(emblema) + 1); //Sumamos en 1 el valor del emblema seleccionado.

    //Sumamos el dia y el mes y dependiendo de su resto sumamos en 1 el valor del emblema (algoritmo inventado).
    let fecha = document.getElementById("pregunta8").value;
    const dia = new Date(fecha).getDate();
    const mes = new Date(fecha).getMonth() + 1;
    let suma = (dia + mes) % 7;
    switch(suma) {
        case 0:
            emblema = "valor";
            break;
        case 1:
            emblema = "amistad";
            break;
        case 2:
            emblema = "afecto";
            break;
        case 3:
            emblema = "conocimiento";
            break;
        case 4:
            emblema = "inocencia";
            break;
        case 5:
            emblema = "sinceridad";
            break;
        case 6:
            emblema = "esperanza";
            break;
    }
    emblemas.set(emblema, emblemas.get(emblema) + 1); //Sumamos en 1 el valor del emblema seleccionado.
}

/**
 * Funcion que encuentra que emblema ha tenido más puntuación.
 * @returns Nombre del emblema.
 */
function resultado() {
    let resultado = "valor"; //Nombre del primer emblema.
    let puntos = emblemas.get("valor"); //Puntos del emblema.
    for (let [key, value] of emblemas) {
        if(value > puntos) { //Si el emblema que estamos comprobando es mayor, guardamos sus datos en las variables que comprueban.
            resultado = key;
            puntos = value;
        }
    }
    return resultado;
}