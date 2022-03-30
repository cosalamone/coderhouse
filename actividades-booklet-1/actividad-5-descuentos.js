/* Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los 
valores ingresados, y realizar una salida.
*/

let precio1=prompt("Por favor, indicanos el precio de tu producto al cual debemos aplicarle el 30% OFF")
let descuento30off= parseInt(precio1)*0.7;

alert("Tu producto con el descuento queda en $"+descuento30off);