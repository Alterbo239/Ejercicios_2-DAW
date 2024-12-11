/**
 * @author Alberto Zamora Landete
 * @since 20/11/2024
 * @version 1
 */

window.addEventListener('load', inicio);

/**
 * Funcion que se ejecutara al iniciar la pagina.
 */
function inicio() {
    crearUsuarios();
    document.getElementById("pass").addEventListener('input', validarPass);
    document.getElementById("login").addEventListener('click', validar);
}

/**
 * Funcion que busca y crea usuarios de la Api publica.
 */
function crearUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
        const cant = 5; //Maximo de usuarios a encontrar.
        let num = 0;
        for (const e of usuarios) {
            if(num < cant) {
                //Guardamos los nombres.
                let ulInfo = document.createElement("ul");
                let liName = document.createElement("li");
                let bName = document.createElement("button");
                bName.innerHTML = e.name;
                bName.id = `name_${e.username}`; //Las "id" seran del username, para que sea mas sencillo buscarlas y encontrarlas.
                bName.style = "border: none";
                bName.addEventListener('click', mostrarFormulario); //Creamos un boton con el nombre, para que muestre luego el formulario.

                //Guardamos el nombre de usuario.
                let liUsername = document.createElement("li");
                liUsername.innerHTML = e.username;
                liUsername.id = `username_${e.username}`;

                //Guardamos el nombre de la ciudad.
                let liCity = document.createElement("li");
                liCity.innerHTML = e.address.city;
                liCity.id = `city_${e.username}`;

                //Introducimos la lista al html.
                liName.appendChild(bName);
                ulInfo.appendChild(liName);
                ulInfo.appendChild(liUsername);
                ulInfo.appendChild(liCity);

                document.body.appendChild(ulInfo);
            }                    
            num++;
        }
    });
}

/**
 * Funcion que muestra el formulario.
 */
function mostrarFormulario() {
    let id = this.id.split("_");
    let idName = id[1]; //Cogemos el nombre de usuario.

    //Mostramos el Div.
    document.getElementById("div").style.display = "block";
    document.getElementById("fotos").style.display = "none";
    
    //Cambiamos la informacion del formulario dependiendo del usuario que hayas querido mostrar.
    document.getElementById("Nombre").innerHTML = document.getElementById("name_"+idName).innerHTML; //Nombre de la persona.
    document.getElementById("username").innerHTML = idName; //Nombre de usuario de la persona.
    document.getElementById("pass").placeholder = document.getElementById("city_"+idName).innerHTML; //Contraseña (que es la ciudad).
}

/**
 * Funcion que valida la contraseña.
 */
function validarPass() {
    let pass = document.getElementById("pass").value;
    let passReal = document.getElementById("pass").placeholder;

    //Si la "pass" introducida coincide con el placeholder, que es la "pass" de verdad, entonces estara bien, sino no.
    if(pass !== passReal) {
        document.getElementById("pass").setCustomValidity("La pass no es correcta.");
    } else {
        document.getElementById("pass").setCustomValidity("");
    }
}

/**
 * Funcion que valida el formulario.
 */
function validar() {
    let form = document.getElementById("formulario");
    if(form.checkValidity()) {
        mostrarFotos(); //Si esta todo bien, pasamos a la funcion "mostrarFotos".
    }
}

/**
 * Funcion que muestra las fotos que se han seleccionado y el nombre de usuario.
 */
function mostrarFotos() {
    //Ocultamos el div anterior y mostramos el nuevo.
    document.getElementById("div").style.display = "none";
    document.getElementById("fotos").style.display = "block";
    document.getElementById("NombreF").innerHTML = document.getElementById("Nombre").innerHTML;
    const num = document.getElementById("num").value; //Guardamos cuantas imagenes queremos mostrar.
    
    //Esta parte no funciona, en principio recorreria segun el "id", por comprobar que funcionaba.
    for (let i = 0; i < num; i++) {
        fetch("https://picsum.photos/id/" + i + "/200/300")
            .then(response => response.blob())
            .then(fotos => {
                let url = URL.createObjectURL(fotos);
                let div = document.getElementById("fotos");
                let imagen = document.createElement("img");
                imagen.setAttribute("src" ,url);
                imagen.style = "width: 100px; height: 100px";

                div.appendChild(imagen);
            });
    }
}