window.addEventListener('load', inicio);

function inicio() {
    class Persona {
        constructor (nombre, edad) {
            this._nombre = nombre;
            this._edad = edad;
        }

        set nombre(n) {
            this._nombre = n;
        }
        get nombre() {
            return this._nombre;
        }

        set edad(e) {
            if(e < 0 || e > 130) {
                throw new Error("Edad no valida.");                
            } else {
                this._edad = e;
            }
        }
        get edad() {
            return this._edad;
        }

        imprimir() {
            document.write("Nombre: " + this.nombre + ". <br> Edad: " + this.edad + ". <br><br>");
        }
    }

    let p = new Persona("Juan", 45);
    p.imprimir();

    p.nombre = "Javier";
    p.edad = 38;

    p.imprimir();

    p.nombre = "Manuel";
    p.edad = -27;

    p.imprimir();
    console.log();
}