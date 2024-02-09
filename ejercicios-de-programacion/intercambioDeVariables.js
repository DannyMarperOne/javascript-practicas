/* Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Teiens que escribir un prograa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la sgudna y la segunda el valor de la primera. */

let valor1 = 10;
let valor2 = 30;
console.log(valor1);
console.log(valor2);

let aux = valor1;
//console.log(aux)
if (valor1 != valor2) {
    valor1 = valor2;
    valor2 = aux;
}
console.log(valor1);
console.log(valor2);