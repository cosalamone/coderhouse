/* Crea un algoritmo que solicite al usuario uno o más valores ingresados 
    por prompt(), compare las entradas y, en función de ciertas condiciones, 
    muestre un resultado. */

let suculenta = prompt("Ingresa la especie de suculenta que desea")

if (suculenta == "haworthia") {
    alert("Quedan 2 en stock")
} else if (suculenta == "cactus"){
    alert("ÚLTIMO en stock")
} else if (suculenta == "echeveria"){
    alert ("Hay muchas en stock")
} else { alert ("No tenemos stock de esa suculenta")}