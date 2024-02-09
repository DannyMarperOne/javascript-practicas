/*While signigica Mientras, entonces este ciclo se interpreta de la siguiente manera: mientras se cumpla la condición de los parentesis, ejecutas el código hasta que la condición ya no se cumpla o que es lo mismo, que la condición deje de ser verdadera*/

/* De la misma manera, se debe agregar el incremento de la variable, ya que si no se hace, el programa se seguira ejecutando y no se dententrá hasta que la computadora se quede sin memoria ram, porque sino lo hacemos el progama nunca dejará de cumplir la condición */

let edad = 0;
while (edad < 18) {
    console.log("Eres un niño");
    edad++
}
console.log("Ya eres un adulto");