// Operadores 



// Operadores aritmeticos

let r1 = 1 + 2; // SUMA
let r2 = 1 * 2; // MULTIPLICACIÓN
let r3 = 1 - 2; // RESTA
let r4 = 1 / 2; // DIVISIÓN
let r5 = 1 % 2; // MÓDULO
let r6 = 1 ** 2; //EXPONENCIACIÓN


// Operadores relacionales

let hola = saludar;
let adios = despedirse;

console.log(7 == 7); //true
console.log("7" == 7); //true
console.log(0 == false); //true

console.log(7 === 7); //true
console.log("7" === 7); //false
console.log(0 === false); //false

/* 
- = Un símbolo de igual: asignación de variables.
- == 2 símbolos de igual: comparación de valores.
- === 3 símbolos de igual: comparación de valores y tipos de datos.
- ! = o ≠ Diferente de o No es.
- ! == Diferente de o No es, pero tomando en cuenta valores y tipos de datos.
- > Mayor que.
- < Menor que.
- ≥ Mayor o igual que.
- ≤ Menor o igual que.
*/

// Operadores de asignación
let i = 1;

i += 4;
console.log(i); //5

//Se puede hacer con todos los operadores aritmeticos

i += 4; // i = i + 4
i -= 6; // i = i - 6
i /= 5; // i = i / 5
i %= 12; // i = i % 12
i *= 8; // i = i * 8


// Operadores de incremento y decremento 

/* 
Se utiliza por lo general al momento de manejar ciclos ya que al momento de hacer 
una iteración este operador hacer que se incremente o decremente el valor de la 
variable asignada.
*/

i = 1;

i++
i--
++i
--i

// Operadora Unario
let x = 1;

x = -x;
alert(x); // -1, se aplicó negación unaria