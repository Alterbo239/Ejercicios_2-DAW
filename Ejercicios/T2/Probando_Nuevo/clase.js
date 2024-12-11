window.addEventListener('load', inicio);

function inicio() {
    class Cliente {
        constructor(nom, saldo) {
            this.nom = nom;
            this.saldo = saldo;
        }

        depositar(dinero) {
            this.saldo += dinero;
        }

        extraer(dinero) {
            this.saldo -= dinero;
        }
    }

    const cli1 = new Cliente("Alberto", 500);
    document.write("Nombre: " + cli1.nom + "<br>");
    document.write("Saldo: " + cli1.saldo + "<br>");
    cli1.depositar(300);
    document.write("Saldo: " + cli1.saldo + "<br>");
    cli1.extraer(120);
    document.write("Saldo: " + cli1.saldo + "<br>");
}