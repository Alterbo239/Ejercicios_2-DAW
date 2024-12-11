let titulos = document.getElementsByTagName("h2");

for (let i = 0; i < titulos.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = titulos[i].innerText;
    document.body.appendChild(p);    
}