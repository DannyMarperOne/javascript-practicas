/* Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

let tortilla, huevos, cebolla, comensales;

comensales = 7
patatas = comensales * 200;
patatas = patatas / 1000;
huevos = patatas * 5;
cebolla = patatas * 300
console.log("Papas " + patatas + " Kg")
console.log("Huevos " + huevos + " Pz")
console.log("Cebolla " + cebolla + " G")