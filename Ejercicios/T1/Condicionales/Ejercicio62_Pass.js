let palabra1, palabra2;

palabra1 = prompt("Escriba su clave:");
palabra2 = prompt("A ver, repita:");

if (palabra1 == palabra2) {
    alert("Las claves coinciden, cuenta creada.");
} else {
    alert("Las claves no coinciden, repita de nuevo o piense antes de escribir...");
}