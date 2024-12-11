let nombre = "Pepe";
let preT = 20, preR;

preT = parseInt(preT);
preR = parseInt(prompt("Cuantas preguntas contesto bien? Numero de preguntas: " + preT));

let resultado = preR * 100 / preT;

if (resultado >= 0 && resultado <= 100) {
    if (resultado >= 90) {
        alert("Felicidades, ha entrado a Nivel Superior.");
    } else if (resultado >= 75) {
        alert("Enhorabuena, ha entrado a Nivel Medio.");
    } else if (resultado >= 50) {
        alert("Se podria hacer mejor, pero, ha entrado a Nivel Regular.");
    } else {
        alert("Usted no tiene nignun nivel en este centro.");
    }
} else {
    alert("Fuera de mi vista sucio tramposo!!!");
}