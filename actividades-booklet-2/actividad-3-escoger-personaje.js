/* Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según 
corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
*/

let numero=prompt("Por favor, indicar un numero")

if (numero == 1){
    alert("Homero");
}
if (numero == 2){
    alert("Marge");
}
if (numero == 3){
    alert("Bart")
}
if(numero == 4){
    alert ("Lisa")
}