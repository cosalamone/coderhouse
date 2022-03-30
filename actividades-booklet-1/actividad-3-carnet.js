/* Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable 
denominada carnet.
*/

let nombreApellido = "Bart Simpson";
let numeroLicencia = "B74U89RE243"
let dirección = "742 Evergreen Terr"
let ciudad = "Springfield"
let pais = "USA"
let fechaDeNacimiento = "02-11-70"
let sexo = "M"
let HT = "4'0"
let colorOjos = "azul"
let WT = 85

let carnet = "Se registra licencia de conducir de " + nombreApellido + ", código número: " +
    numeroLicencia + ", radicado en " + dirección + ", " + ciudad + ", " +
    pais + ". Con fecha de nacimiento " + fechaDeNacimiento + ", de sexo " +
    sexo + ", HT " + HT + ", color de ojos " + colorOjos + " y WT " + WT; 


console.log(carnet)