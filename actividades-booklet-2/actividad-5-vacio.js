/* Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos
 fueron cargados, realizar una única salida compuesta por el listado de productos.
  Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.*/

let producto1 = prompt("Por favor, indicar un producto");
let producto2 = prompt("Por favor, indicar un segundo producto");
let producto3 = prompt("Por favor, indicar un tercer producto");
let producto4 = prompt("Por favor, indicar un último producto");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "") ) {
    alert(producto1 + " " + producto2 + " " + producto3 + " " + producto4)
}
  else {
    alert("Error: Es necesario cargar todos los productos")
}