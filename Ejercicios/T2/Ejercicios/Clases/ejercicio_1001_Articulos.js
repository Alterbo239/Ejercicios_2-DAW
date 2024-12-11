window.addEventListener('load', inicio);

function inicio() {
    const articulos = [
        {
          nombre:'sandía',
          precio:12
        },
        {
          nombre:'manzanas',
          precio:52
        },
        {
          nombre:'peras',
          precio:40
        },
        {
          nombre:'naranjas',
          precio:35
        }    
    ]

    for (const articulo of articulos) {
        document.write(`El precio de ${articulo.nombre} es: ${articulo.precio}. <br>`); //Forma de recorrer un array.
    }
    document.write("<br>");
    for (const [pos, articulo] of articulos.entries()) { //De esta forma cogemos el numero de la posicion y el articulo al que pertenece.
      if(articulo.precio > 30) {
        document.write(`Posicion: ${pos}. El precio de ${articulo.nombre} es: ${articulo.precio}. <br>`); //De la misma forma mostramos el array, pero con la posicion delante.
      }
    }
}