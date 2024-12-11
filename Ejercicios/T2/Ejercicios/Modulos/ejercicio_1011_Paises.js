window.addEventListener('load', inicio);

function inicio() {
    const paises = new Map([
        ["España", 49],
        ["Italia", 58],
        ["Perú", 34],
        ["Japón", 123],
        ["Bolivia", 11],
        ["Singapour", 6],
        ["Alemania", 84]
    ]);

    let lo = document.createElement("ol");
    paises.forEach((value, key) => {
        let li = document.createElement("li");
        li.innerHTML = key + ": " + value + " millones.";
        lo.appendChild(li);
    });
    document.body.appendChild(lo);
}