// Ejecucion de la funcion

window.onload = carritoCompra;

// FUNCION PRINCIPAL

function carritoCompra() {
    let compra = lista();
    calcularCosto(compra);
}


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


// funcion accesoria 2 - calcular costo de lista de compra 

function calcularCosto(compra) {

    let costo = 0;
    let sinStock = [];
    for (let i = 0; i < compra.length; i++) {

        let precio = precioProducto(compra[i]);
        ;

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

// funcion 3 - calcular Precio del Producto

function precioProducto(nombreProducto) {

    let productos = [
        { nombre: "haworthia", precio: 200 },
        { nombre: "graptoveria", precio: 150 },
        { nombre: "echeveria", precio: 250 },
        { nombre: "gasteria", precio: 250 },
    ]

    for (let i = 0; i < productos.length; i++) {
        if (nombreProducto == productos[i].nombre) {
            return (productos[i].precio);
        }

    }
    return (null);
}