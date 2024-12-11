window.addEventListener('load', inicio);

function inicio() {
    const num1 = parseInt(prompt("Ingrese valor 1:"));
    const num2 = parseInt(prompt("Ingrese valor 2:"));

    document.write(`La suma de ${num1} + ${num2} es ${num1+num2}`);
}