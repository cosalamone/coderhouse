/*
Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos 
registrados.
*/

let resultado = ""
for (i=0; i<10; i++) {
    let alumno= prompt("Indicar el nombre de alumno");
    resultado= resultado + " " + alumno
}
alert (resultado)