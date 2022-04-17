// CLASES PLANTAS Y MACETAS
class plantas {
    constructor(cateogria, especie, tipo, precio, foto, descripcion, ) {
        this.categoria = categoria;
        this.especie = especie;
        this.tipo = tipo;
        this.precio=precio;
        this.foto=foto;
        this.descripcion=descripcion; 
    }
}

class macetas{
    constructor(categoria, material, color, tamaño, precio, descripcion){
        this.categoria=categoria;
        this.material=material;
        this.color=color;
        this.tamaño=tamaño;
        this.precio=precio;
        this.descripcion=descripcion;
    }
}



// PRODUCTOS 
let listaProductos = [
    { categoria: "suculentas", especie: "haworthia", tipo: "fasciata", precio: 200, foto: "(./fotos/rsz_suculentas-2.jpg" },
    { categoria: "suculentas", especie: "graptopetalum", tipo: "paraguayense", precio: 150, foto: "./fotos/rsz_suculentas-1.jpg" },
    { categoria: "suculentas", especie: "echeveria", tipo: "lola", precio: 250 },
    { categoria: "suculentas", especie: "gasteria", tipo: "", precio: 250 },
    { categoria: "suculentas", especie: "sedum", tipo: "burrito", precio: 250 },
    { categoria: "plantas de interior", especie: "calathea", tipo: "tiostar", precio: 350 },
    { categoria: "plantas de interior", especie: "pothus", tipo: "variegado", precio: 500 },
    { categoria: "plantas de interior", especie: "monstera deliciosa", tipo: "", precio: 1200, },
    { categoria: "macetas", material: "plastico", color: "negra", tamaño: 8, precio: 50 },
    { categoria: "macetas", material: "plastico", color: "negra", tamaño: 12, precio: 70 },
    { categoria: "macetas", material: "plastico", color: "negra", tamaño: 24, precio: 140 },
    { categoria: "macetas", material: "plastico", color: "blanco", tamaño: 8, precio: 50 },
    { categoria: "macetas", material: "plastico", color: "blanco", tamaño: 12, precio: 70 },
    { categoria: "macetas", material: "plastico", color: "blanco", tamaño: 24, precio: 140 },
    { categoria: "macetas", material: "barro", color: "terracota", tamaño: 8, precio: 90 },
    { categoria: "macetas", material: "barro", color: "terracota", tamaño: 12, precio: 120 },
    { categoria: "macetas", material: "barro", color: "terracota", tamaño: 24, precio: 200 },
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


