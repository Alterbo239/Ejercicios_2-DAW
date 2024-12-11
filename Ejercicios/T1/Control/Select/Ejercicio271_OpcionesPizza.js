window.addEventListener('load', inicio);

function inicio() {
    let lista = document.getElementById("lista");
    lista.addEventListener('change', cambioPizza);
}

function cambioPizza() {
    if(this.selectedIndex != 0) {
        let pizza = this.options[this.selectedIndex].text;
        let precio = this.options[this.selectedIndex].value;

        document.getElementById("textoPizza").value = pizza + " -> " + precio;
    }
}