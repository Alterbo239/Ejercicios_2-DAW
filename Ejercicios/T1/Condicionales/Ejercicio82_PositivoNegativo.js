let n;

n = parseInt(prompt("Escriba un numero:"));

if (n > 0) {
    alert("Numero positivo.");
} else {
    if (n < 0) {
        alert("Numero negativo.");
    } else {
        alert("Numero cero.");
    }
}

console.log(n);