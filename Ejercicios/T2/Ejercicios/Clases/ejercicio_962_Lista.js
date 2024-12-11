window.addEventListener('load', inicio);

function inicio() {
    class ListaOrdenada {
        constructor() {
            this.vector = [];
        }

        agregar(num) {
            this.vector.push(num);

            this.vector.sort((n1, n2) => {
                return n1-n2;
            } );
        }

        mostrar() {
            let lista = "<ol>";
            for (let i = 0; i < this.vector.length; i++) {
                lista += `<li> ${this.vector[i]} </li>`;
            }
            lista += "</ol>";
            document.write(lista);
        }
    }

    let lista = new ListaOrdenada();
    let num = 1;
    
    alert("Para parar ingrese '0'");
    while(num != 0) {
        num = parseInt(prompt("Ingrese un numero:"));
        lista.agregar(num);
    }

    lista.mostrar();
}