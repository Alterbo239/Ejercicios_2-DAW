window.addEventListener('load', inicio);

function inicio() {
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        mostrar() {
            let div = "Señor " + this.nombre + ", usted es ";
            if (this.edad < 18) {
                div += "menor de edad.<br>";
            } else {
                div += "mayor de edad.<br>";
            }

            document.write(div);
        }
    }

    let persona1 = new Persona("Alberto", 22);
    let persona2 = new Persona("Mauricio", 16);

    persona1.mostrar();
    persona2.mostrar();
}