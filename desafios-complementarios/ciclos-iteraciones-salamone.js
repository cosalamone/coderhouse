/* 
Tomando como base los ejemplos anteriores de la estructura for y while, 
crear un algoritmo que repita un bloque de instrucciones. En cada repetición 
es necesario efectuar una operación o comparación para obtener una salida 
por alerta o consola.
*/


let numero = prompt("Ingrese un número");

for (i = 1; i <= numero; i++) {
    alert("Repetición N° " + i);
    if (i == 7) {
        break;
    }
}


let ingreso = prompt("Ingresá el nombre del curso");

while ("javascript" != ingreso.toLowerCase() && "js" != ingreso.toLowerCase()) {
    ingreso = prompt("Ingresá el nombre del curso");
    console.log("mal escrito");
}




