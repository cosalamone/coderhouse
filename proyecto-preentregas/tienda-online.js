
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
        return this.especie + " " + this.tipo
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
        return this.categoria + " de " + this.material + " " + this.color + " n" + this.tamaño
    }
}
// FIN CLASES PLANTAS Y MACETAS



// PRODUCTOS 
let listaProductos = [
    new Planta("planta", "haworthia", "fasciata", 200, "./fotos/rsz_haworthia_fasciata.jpg", "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo."),
    new Planta("planta", "graptopetalum", "paraguayense", 150, "./fotos/rsz_suculentas-1.jpg", "Ideal para lugares con sol directo entre 3 y 6 horas. En verano protegerla de las horas mpas fuertes de sol."),
    new Planta("planta", "echeveria", "caly argentea", 250, "./fotos/rsz_echeveriacalyargentea.jpg", "Por su pruina aguanta bien las horas de sol. Hay que tener cuidado con no excederse con el riego, es propensa a pudrición de tallo"),
    new Planta("planta", "gasteria", "normal", 250, "./fotos/rsz_1suculenta-4.jpg", "Necesitan cuidados similares a las haworthias, lugares con luz natural pero sin sol directo"),
    new Planta("planta", "sedum", "burrito", 250, "./fotos/rsz_sedumburrito.jpg", "Hermosa suculenta colgante. Ideal para lugares iluminados con pocas horas de sol, preferentemente sol suave de la mañana o últimos de la tarde"),
    new Planta("planta", "calathea", "triostar", 350, "./fotos/rsz_calatheas.jpg", "Ideal para lugares iluminados sin sol directo"),
    new Planta("planta", "pothus", "variegado", 500, "./fotos/rsz_pothos.jpg", "Planta de interior, sin sol directo, ideal para lugares humedos como el baño"),
    new Planta("planta", "monstera deliciosa", "normal", 1200, "./fotos/rsz_monstera.jpg", "Ideal para lugares con mediasombra, como debajo de un arbol o lugar semitechado"),
    new Maceta("maceta", "plastico", "negra", 8, "./fotos/rsz_maceta-plastico-8-negra.jpg", 50, "Maceta de plastico de color negra. Tamaño numero 8"),
    new Maceta("maceta", "plastico", "negra", 12, "./fotos/rsz_maceta-plastico-negra-12.jpg", 70, "Maceta de plastico de color negra. Tamaño numero 12"),
    new Maceta("maceta", "plastico", "negra", 24, "./fotos/rsz_maceta-plastico-24-negra.jpg", 140, "Maceta de plastico de color negra. Tamaño numero 24"),
    new Maceta("maceta", "plastico", "blanco", 8, "./fotos/rsz_maceta-plastico-blanca-8.jpg", 50, "Maceta de plastico de color blanco. Tamaño numero 8"),
    new Maceta("maceta", "plastico", "blanco", 12, "./fotos/rsz_maceta-plastico-12.jpg", 70, "Maceta de plastico de color blanco. Tamaño numero 12"),
    new Maceta("maceta", "plastico", "blanco", 24, "./fotos/rsz_maceta-plastico-blanca-24.jpg", 140, "Maceta de plastico de color blanco. Tamaño numero 24"),
    new Maceta("maceta", "barro", "terracota", 8, "./fotos/rsz_maceta-barro-8.jpg", 90, "Maceta de barro. Tamaño numero 8"),
    new Maceta("maceta", "barro", "terracota", 12, "./fotos/rsz_maceta-barro-12.jpg", 120, "Maceta de barro. Tamaño numero 12"),
    new Maceta("maceta", "barro", "terracota", 24, "./fotos/rsz_maceta-barro-24.jpg", 200, "Maceta de barro. Tamaño numero 24"),
]
// PRODUCTOS 


let html = "";


//UBICACION PARA QUE FUNCIONE, DESPUES DE LOS LET 
window.onload = mostrarProductos(listaProductos);


// FUNCION MOSTRARPRODUCTOS
function mostrarProductos(listaProductos) {
    let elementoArticulos = document.getElementById("articulos");
    elementoArticulos.innerHTML = ""
    for (let i = 0; i < listaProductos.length; i++) {
        elementoArticulos.innerHTML += generarHTML(listaProductos[i])
    }
}
// FUNCION MOSTRARPRODUCTOS


// FUNCION GENERARHTML
function generarHTML(producto) {
    html =
        `<div class="col">
    <div class="card animate__animated animate__fadeIn">
    <div title= "${producto.titulo()}" class="cover cover-small"
    style="background-image: url(${producto.foto})";>
    </div>
    
    <div class="card-body">
    <h5 class="card-title">${producto.titulo()}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <span class="badge bg-dark">$${producto.precio}</span>
    
    </div>
    </div>
    </div> `

    return html
}
// FUNCION GENERARHTML



// FUNCION FILTER LISTAPRODUCTOS 
function filtro(categoria) {

    let listaFiltrada = []

    listaFiltrada = listaProductos.filter(unProducto => unProducto.categoria == categoria);

    mostrarProductos(listaFiltrada)
}
// FIN FUNCION FILTER LISTAPRODUCTOS





// FUNCION CARRITO COMPRA

function carritoCompra() {
    let compra = lista();
    calcularCosto(compra);
}
// FIN FUNCION PRINCIPAL


// funcion accesoria 1 - obtener la lista de compra 
function lista() {
    let compra = [];
    let promptIngresado = "";

    do {
        promptIngresado = prompt("¿Qué plantas querés comprar? Al finalizar su carrito escriba 'fin'").toLowerCase();

        if (promptIngresado != "fin")
            compra.push(promptIngresado);

    }
    while (promptIngresado != "fin")

    return (compra);
}
// FIN funcion accesoria 1 - obtener la lista de compra 


// funcion accesoria 2 - calcular costo de lista de compra 

function calcularCosto(compra) {

    let costo = 0;
    let sinStock = [];
    for (let i = 0; i < compra.length; i++) {

        let precio = precioProducto(compra[i]);

        if (precio != null) {
            costo = costo + precio;
        } else {
            sinStock.push(compra[i]);
        }

    }
    if (sinStock.length > 0) {
        alert("El/los producto/s " + sinStock + " no se agregaron al carrito de compras porque no contamos con stock");
    }

    alert("El valor total de tu compra incluyendo el envío de $349 es de " + (costo + 349));
}
//  FIN funcion accesoria 2 - calcular costo de lista de compra 



// funcion 3 - calcular Precio del Producto
function precioProducto(nombreProducto) {

    for (let i = 0; i < listaProductos.length; i++) {
        if (nombreProducto == listaProductos[i].titulo()) {
            return (listaProductos[i].precio);
        }

    }
    return (null);
}
// FIN funcion 3 - calcular Precio del Producto