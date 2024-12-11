window.addEventListener('load', inicio);

function inicio() {
    fetch("https://digi-api.com/api/v1/digimon/3")
        .then(response => response.json())
        .then(digimon => {
            let cadena = "";
            cadena += `Nombre: ${digimon.name}`;
            cadena += "<br><br>";

            cadena += "xAntibody: ";
            if(digimon.xAntibody) {
                cadena += "Si.";
            } else {
                cadena += "No.";
            }
            cadena += "<br><br>";

            cadena += "Tipo: <br>";
            for (let type of digimon.types) {
                cadena += "- " + type.type + "<br>";
            }
            cadena += "<br>";

            cadena += "Atributo: <br>";
            for (let atributo of digimon.attributes) {
                cadena += "- " + atributo.attribute + "<br>";
            }
            cadena += "<br>";

            cadena += "Campos: <br>";
            for (let field of digimon.fields) {
                cadena += "- " + field.field + "<br>";
            }
            cadena += "<br>";

            cadena += "Nivel: ";
            for (let level of digimon.levels) {
                cadena += level.level;
            }
            cadena += "<br><br>";

            cadena += "Movimientos: <br>";
            for (let skill of digimon.skills) {
                cadena += "- " + skill.skill + "<br>";
            }
            cadena += "<br>";

            cadena += "Posibles evoluciones: <br>";
            for (let evolucion of digimon.nextEvolutions) {
                cadena += "- " + evolucion.digimon + ".";
                if(evolucion.condition != "") {
                    cadena += " Condicion: " + evolucion.condition;
                }
                cadena += "<br>";
            }
            document.write(cadena);
        });
}