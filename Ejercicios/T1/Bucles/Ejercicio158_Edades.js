let edad;
let mati = parseInt(0), tard = parseInt(0), nit = parseInt(0);

for (var i = 0; i < 5; i++) {
    edad = parseInt(prompt((i+1) + ". Ingrese su edad: "));
    mati += edad;
}

for (var i = 0; i < 6; i++) {
    edad = parseInt(prompt((i+1) + ". Ingrese su edad: "));
    tard += edad;
}

for (var i = 0; i < 11; i++) {
    edad = parseInt(prompt((i+1) + ". Ingrese su edad: "));
    nit += edad;
}

mati /= 5;
tard /= 6;
nit /= 11;

document.write("Edad promedio al mati: " + mati + "<br>");
document.write("Edad promedio a la tard: " + tard + "<br>");
document.write("Edad promedio a la nit: " + nit + "<br>");

document.write("<br> La edad mas alta es ");
if (mati >= tard && mati >= nit) {
    if (mati == tard && mati == nit) {
        document.write("la misma en las tres: " + mati);
    } else if (mati == tard) {
        document.write("la del mati y de la vesprada: " + mati);
    } else if (mati == nit) {
        document.write("la del mati y de  la nit: " + mati);
    } else {
        document.write("la del mati: " + mati);       
    }
} else if (tard >= nit) {
    if (tard == nit) {
        document.write("la de la vesprada y de la nit: " + tard);
    } else {
        document.write("la de la vesprada: " + tard);
    }
} else {
    document.write("la de  la nit: " + nit);
}