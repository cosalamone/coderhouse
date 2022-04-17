// CLASES PLANTAS Y MACETAS
class Planta {
    constructor(categoria, especie, tipo, precio, foto, descripcion,) {
        this.categoria = categoria;
        this.especie = especie;
        this.tipo = tipo;
        this.precio = precio;
        this.foto = foto;
        this.descripcion = descripcion;
    }
    titulo() {
        this.especie + " " + this.tipo
    }
}

class Maceta {
    constructor(categoria, material, color, tamaño, foto, precio, descripcion) {
        this.categoria = categoria;
        this.material = material;
        this.color = color;
        this.tamaño = tamaño;
        this.foto = foto;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    titulo() {
       this.categoria + " de " + this.material + " N" + this.tamaño
    }
}



// PRODUCTOS 
let listaProductos = [
    new Planta("suculentas", "haworthia", "fasciata", 200, "(./fotos/rsz_suculentas-2.jpg", "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo."),
    new Planta("suculentas", "graptopetalum", "paraguayense", 150, "./fotos/rsz_suculentas-1.jpg", "Ideal para lugares con sol directo entre 3 y 6 horas. En verano protegerla de las horas mpas fuertes de sol."),
    new Planta("suculentas", "echeveria", "caly argentea", 250, "./fotos/", "Por su pruina aguanta bien las horas de sol. Hay que tener cuidado con no excederse con el riego, es propensa a pudrición de tallo"),
    new Planta("suculentas", "gasteria", "normal", "./foto/", 250, "Necesitan cuidados similares a las haworthias, lugares con luz natural pero sin sol directo"),
    new Planta("suculentas", "sedum", "burrito", "./foto/", 250, "Hermosa suculenta colgante. Ideal para lugares iluminados con pocas horas de sol, preferentemente sol suave de la mañana o últimos de la tarde"),
    new Planta("plantas de interior", "calathea", "tiostar", "./foto/", 350, "Ideal para lugares iluminados sin sol directo"),
    new Planta("plantas de interior", "pothus", "variegado", "./foto/", 500, "Planta de interior, sin sol directo, ideal para lugares humedos como el baño"),
    new Planta("plantas de interior", "monstera deliciosa", "normal", "./foto/", 1200, "Ideal para lugares con mediasombra, como debajo de un arbol o lugar semitechado"),
    new Maceta("macetas", "plastico", "negra", 8, "./foto/", 50, "Maceta de plastico de color negra. Tamaño numero 8"),
    new Maceta("macetas", "plastico", "negra", 12, "./foto/", 70, "Maceta de plastico de color negra. Tamaño numero 12"),
    new Maceta("macetas", "plastico", "negra", 24, "./foto/", 140, "Maceta de plastico de color negra. Tamaño numero 24"),
    new Maceta("macetas", "plastico", "blanco", 8, "./foto/", 50, "Maceta de plastico de color blanco. Tamaño numero 8"),
    new Maceta("macetas", "plastico", "blanco", 12, "./foto/", 70, "Maceta de plastico de color blanco. Tamaño numero 12"),
    new Maceta("macetas", "plastico", "blanco", 24, "./foto/", 140, "Maceta de plastico de color blanco. Tamaño numero 24"),
    new Maceta("macetas", "barro", "terracota", 8, "./foto/", 90, "Maceta de barro. Tamaño numero 8"),
    new Maceta("macetas", "barro", "terracota", 12, "./foto/", 120, "Maceta de barro. Tamaño numero 12"),
    new Maceta("macetas", "barro", "terracota", 24, "./foto/", 200, "Maceta de barro. Tamaño numero 24"),
]

let html = "";


window.onload = mostrarProductos(listaProductos);


function mostrarProductos(listaProductos) {

    for (let i = 0; i < listaProductos.length; i++) {
        document.getElementById("articulos").innerHTML += generarHTML(listaProductos[i])
    }

}


function generarHTML(producto) {
    html =
        `<div class="col">
        <div class="card">
             <div title= "${producto.especie} ${producto.tipo}" class="cover cover-small"
                style="background-image: url(${producto.foto})" ;>
            </div>

             <div class="card-body">
                 <h5 class="card-title">${producto.especie} ${producto.tipo}</h5>
                 <p>${producto.descripcion}</p>
                 <span class="badge bg-dark">$${producto.precio}</span>

                 </div>
            </div >
    </div > `

    return html
}


function generarHTML2(producto) {
    html =
        `<div class="col">
        <div class="card">
             <div title= "${producto.especie} ${producto.tipo}" class="cover cover-small"
                style="background-image: url(${producto.foto})" ;>
            </div>

             <div class="card-body">
                 <h5 class="card-title">${producto.especie} ${producto.tipo}</h5>
                 <p>${producto.descripcion}</p>
                 <span class="badge bg-dark">$${producto.precio}</span>

                 </div>
            </div >
    </div > `

    return html
}


