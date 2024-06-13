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

console.log(`La palabra ${piloto} ${frase.includes(piloto) ? 'si' : 'no'} está dentro de la frase principal!`); //Devuelve si o no
console.log(`La palabra ${piloto} ${frase.includes(piloto)} está dentro de la frase principal!`); //Devulve true o false
console.log(`La palabra ${piloto} ${frase.includes(piloto, 12)} está dentro de la frase principal!`); //Busca apartir de la posición 12 de la cadena (False)



//*************** endsWhith() ************* */

let fraseTwo = "Arriba el futbol de Monterrey"
console.log(`La última palabra de la frase es Monterrey? ${fraseTwo.endsWith('Monterrey') ? 'SI' : 'NO'}`); //Determina la última palabra del string
console.log(`La última palabra de la frase es Monterrey? ${fraseTwo.endsWith('Monterrey', 3) ? 'SI' : 'NO'}`); //La posición de busqueda va de cualquier posición hacia atras



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



// ********************* localeCompare() *******************

//Sirve para hacer comparaciones entre cadenas de texto dependiento el alfabeto
let palabra1 = "manzana";
let palabra2 = "banana";

let resultado = palabra2.localeCompare(palabra1);
console.log(resultado); //Salida: -1
let resultado2 = palabra1.localeCompare(palabra2);
console.log(resultado2); //Salida: 1
/* Nota: entiendo que la cadena que está antes del localCompare es el dato a comparar, 
y este manda si el resultado es -1,1 o 0 (Si va antes des de lo que está entre parentesis o después) */

let nombres = ["Pedro", "Ana", "Juan"];
nombres.sort((a, b) => a.localeCompare(b)); //Ocupamos sort para ordenar un arreglo y con localCompare le decimos que lo ordene alfabeticamente.
console.log(nombres);

//Se puede especificar el idioma en el que se requiere hacer la comparación
console.log("ä".localeCompare("z", "de")); // un valor negativo: en alemán, ä se ordena antes que z
console.log("ä".localeCompare("z", "sv")); // un valor positivo: en sueco, ä se ordena después que z



// ************************ Secuencias de escape o Notación de escape ****************************

let saludar = "Hola \n Daniel como estás \'Amigo\' \nMi nombre es \\ Gloria \\ \"Cabeza de Bolo\" Jejejej \r y tu? \v tabulacion vertical \t jejjeej \f ijijjiji \ud83d";
console.log(saludar);

// Cadenas literales largas
let adios = "Adios amigo \
me tengo que ir \
mañana debo de trabajar"; //Adios amigo me tengo que ir mañana debo de trabajar

let bye = "Adios amigo" +
    "me tengo que ir" +
    "mañana debo de trabajar"; //Adios amigo me tengo que ir mañana debo de trabajar



// ******************** String.fromCharCode() ********************************

// Devuelve una cadena creada de valores Unicode.
console.log(String.fromCharCode(65, 69, 67)); //Salida: AEC



// ******************** string.raw **************************

//Devuleve cadenas en crudo, sin procesar

let name1 = "Daniel";
let full = String.raw `Hola\n${name1}\\ como estás \"`;
/* No procesa secuencias de escape (barras invertidas), no da saltos de linea, 
ni agrega comillas, todo lo pasa literal. */

console.log(full); //Salida: Hola\nDaniel\\ como estás \"



// **************** .match() ***************

//Devuelve un array que contiene todas las coincidencias encontradas dentro de un string apartir de una Expresion Regula

let fraseThree = "Hola mi nombre es Optimus Prime, comandante de los 'Autobots'"
const expresionReg = /[A-Z]/g;
let resultMatch = fraseThree.match(expresionReg); //devuelve todas (/g) las mayusculas de la A-Z 
console.log(resultMatch);

const expresionReg2 = /[A-Z]/;
let resultMatch2 = fraseThree.match(expresionReg2); //devuelve la primer mayuscula entre la A-Z, su index, el input y el grupo
console.log(resultMatch2)



// ***************** padEnd() ****************

//Este metodo rellena un string con el string que nosotros proporciones colocando el index en el maxlenght que deseemos
let phraseEnd = "Esta frase termina con * apartir de aqui ";
let padExample = phraseEnd.padEnd(55, "*");
console.log(padExample);
//Si el maxLength es menor o igual al string, devolverá el string tal cual fue declarado.
console.log(phraseEnd.padEnd(10, "Repeat"));
// Si solo se coloca el maxLength sin el fillString como resultado por defecto es rellenar las posiciones con " ".
console.log(phraseEnd.padEnd(60));
console.log(phraseEnd.padEnd(60, "Repeat"));



// ***************** padStart() ****************

//Este metodo rellena un string con el string que nosotros proporciones colocando el index en el maxlenght que deseemos
//pero rellenará desde el principio del string original

//las condiciones de uso son las mismas que las de padEnd()
let phraseStart = "Esta frase empieza con *.";
console.log(phraseStart.padStart(40, "*"));


// ***************** repeat() ****************

//Repite un string la cantidad de veces necesarias (Solo numeros enteros)
console.log("hola".repeat(10));
console.log("hola".repeat(10)); // RangeError
console.log("abc".repeat(0)); // ''



// ***************** replace() ****************

// Reemplaza un string completo, buscando una coincidencia y cambiandola por otro string
console.log("viva mexico cabrones".replace("cabrones", "******"));
//Se pueden utilizar expresiones regulare
let expRegReplace = /comer/i;
console.log("Es hora de ir a comer".replace(expRegReplace, "Dormir"));

const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // orange are round, and oranges are juicy.

const ree = /(\w+)\s(\w+)/;
const stre = "Maria Cruz";
const newstre = stre.replace(ree, "$2, $1");
console.log(newstre); // Cruz, Maria



function f2c(x) {
    function convert(str, p1, offset, s) {
        return `${((p1 - 32) * 5) / 9}C`;
    }
    const s = String(x);
    const test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

console.log(f2c("20F"));