let num;

num = parseInt(prompt("Ingrese un numero de hasta 3 cifras!"));

if (0 < num && num < 10) {
    alert("Numero de 1 cifra.");
} else {
    if (9 < num  && num < 100) {
        alert("Numero de 2 cifras.");
    } else {
        if (99 < num && num < 1000) {
            alert("Numero de 3 cifras.");
        } else {
            alert("Pense que el cartel estaba bien claro...");
        }
    }
}