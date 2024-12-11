let palabra;

palabra = prompt("Escribe una palabra. (casa, mesa, perro, gato)");
palabra = palabra.toLowerCase();

switch (palabra) {
    case "casa":
        alert("House.");
        break;
    case "mesa":
        alert("Table.");
        break;
    case "perro":
        alert("Dog.");
        break;
    case "gato":
        alert("Cat.");
        break;
    default:
        alert("Esa palabra no esta, disculpe las molestias.");
        break;
}