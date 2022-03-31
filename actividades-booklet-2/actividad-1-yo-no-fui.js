/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una 
salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.*/

let nombre = prompt("Por favor, indicame tu nombre");
let nombreAlmacenado = "Constanza";

if (nombre == nombreAlmacenado) {
    alert("Fui yo");
}

else { 
    alert("Yo no fui"); 
}