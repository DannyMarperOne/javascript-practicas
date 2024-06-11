//#04 CADENAS DE CARACTERES

/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */


let player = "Cristiano Ronaldo"

//*************  Longitud = Length  *****************
let cr7 = player.length;

console.log(cr7) //Salida: 17
console.log('The name ' + player + ' has ' + player.length + ' characters'); //Salida: The name Cristiano Ronaldo has 17 characters



//**************  charAt = Acceder a un solo caracter  ****************
let escuderia = "Ferrari";

//Acceder a la posición del caracter
console.log(escuderia.charAt(3)); //Salida: r
//Acceder al último caracter del string
console.log(escuderia.charAt(escuderia.length - 1)); //Salida: i

//Si se busca una posición que supere el tamaño del string, devulve cadena vacia.



//************** concat() = concatenar ****************
let hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day.")); //Salida: Hello, Kevin. Have a nice day.

let greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); //Salida: "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"



//************** includes() *************

let frase = "El campeon Max Verstappen vs el 7 veces campeon Lewis Hamilton"
let piloto = "Max";

console.log(`La palabra ${piloto} ${frase.includes(piloto)? 'si' : 'no'} está dentro de la frase principal!`); //Devuelve si o no
console.log(`La palabra ${piloto} ${frase.includes(piloto)} está dentro de la frase principal!`); //Devulve true o false
console.log(`La palabra ${piloto} ${frase.includes(piloto,12)} está dentro de la frase principal!`); //Busca apartir de la posición 12 de la cadena (False)



//*************** endsWhith() ************* */

let fraseTwo = "Arriba el futbol de Monterrey"
console.log(`La última palabra de la frase es Monterrey? ${fraseTwo.endsWith('Monterrey')?'SI':'NO'}`); //Determina la última palabra del string
console.log(`La última palabra de la frase es Monterrey? ${fraseTwo.endsWith('Monterrey', 3)?'SI':'NO'}`); //La posición de busqueda va de cualquier posición hacia atras



//*************** indexOf() y lastIndexOf() ************* */

let cadena = "MasterClassEnds";

console.log(cadena.indexOf("m")); //Salida: -1 (no encontrará la posición de 'm' porque indexOf es sencible a Mayusculas)
console.log(cadena.indexOf("M")); //Salida: 0
console.log(cadena.indexOf("a")); //Salida: 1 (indexOf busca el primer caracter de izquierda a derecha)
console.log(cadena.lastIndexOf("a")); //Salida: 8 (lasIndexOf busca el primer caracter pero de derecha a izquierda)


let cuenta = 0;
let posicion = cadena.indexOf("s");
while (posicion != -1) {
    cuenta++;
    posicion = cadena.indexOf("s", posicion + 1);
}
console.log(cuenta); //Salida: 4 (En si porque solo existen 4 's' dentro del string entonces la iteración fue de 4)
console.log(posicion); //Salida: -1 (Cuando ya no encontra más posiciones en el string retorna -1)







// String.fromCharCode() 
// Devuelve una cadena creada de valores Unicode.
console.log(String.fromCharCode(65, 69, 67)); //Salida: AEC

//string.raw
//Devuleve cadenas en crudo, sin procesar

let name = "Daniel";
let full = String.raw `Hola\n${name}\\ como estás \"`;
/* No procesa secuencias de escape (barras invertidas), no da saltos de linea, 
ni agrega comillas, todo lo pasa literal. */

console.log(full); //Salida: Hola\n${name}\\ como estás \"