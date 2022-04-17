/*

// { especie: "", tipo: "", precio: , foto:"},

// PRODUCTOS PLANTAS SUCULENTAS
let productosSuculentas = [
    { especie: "haworthia", tipo: "fasciata", precio: 200, foto: "(./fotos/rsz_suculentas-2.jpg" },
    { especie: "graptopetalum", tipo: "paraguayense", precio: 150, foto: "./fotos/rsz_suculentas-1.jpg" },
    { especie: "echeveria", tipo: "lola", precio: 250 },
    { especie: "gasteria", tipo: "", precio: 250 },
    { especie: "sedum", tipo: "burrito", precio: 250 },
]


// PRODUCTOS PLANTAS DE INTERIOR
let productosDeInterior = [
    { especie: "calathea", tipo: "tiostar", precio: 350 },
    { especie: "pothus", tipo: "variegado", precio: 500 },
    { especie: "monstera deliciosa", tipo: "", precio: 1200, },
]

//{ material: "", color:"", tamaño: , precio:  ,foto: "" }
// MACETAS
let productosMacetas = [
    { material: "plastico", color: "negra", tamaño: 8, precio: 50 },
    { material: "plastico", color: "negra", tamaño: 12, precio: 70 },
    { material: "plastico", color: "negra", tamaño: 24, precio: 140 },
    { material: "plastico", color: "blanco", tamaño: 8, precio: 50 },
    { material: "plastico", color: "blanco", tamaño: 12, precio: 70 },
    { material: "plastico", color: "blanco", tamaño: 24, precio: 140 },
    { material: "barro", color: "terracota", tamaño: 8, precio: 90 },
    { material: "barro", color: "terracota", tamaño: 12, precio: 120 },
    { material: "barro", color: "terracota", tamaño: 24, precio: 200 },
]
*/
// ${}




window.onload(fx)


// recorrer array, x cada pd generar html + innerHTML  <div class="row row-cols-1 row-cols-md-3 g-4"> get elemen ID 
function mostrarProductos (){

}






const producto = { especie: "haworthia", tipo: "fasciata", descripcion: "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo", precio: 200, foto: "(./fotos/rsz_suculentas-2.jpg" }
let html = "";

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

    alert(html)
}



