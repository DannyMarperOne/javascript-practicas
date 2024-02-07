// Declaración de función
function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

// Invocación de Función 
// estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
    console.log("Uno");
    return 19; //Cuando una funcion tiene un return el interprete ignora el resto del código de la funcion y ahí detiene la ejecución.
    console.log("Dos");
    console.log("Tres");
    return "La función a retornado una cadena de texto";
}
// let valorDeFuncion = unaFuncionQueDevuelveValor();

// console.log(valorDeFuncion);




// La siguiente función es una función con parametros normal pero ECMAScript 6 ya se pueden colocar parametros por defecto en caso en el que cuando se mande a llamar una función y solicite parametros, en la llamada no sea colocados los valores, en ese caso los parametros por defecto apareceran para que no se impriman undefined
function saludar(nombre = "Desconocito", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad} años`);
};

saludar("Koda", 1);
saludar();


// Funciones Declaradas vs Funciones Expresadas
// Funciones Declaradas
// Hoisting
funcionDeclarada();

function funcionDeclarada() {
    console.log('Esto es una función declarada, puede ser invocada en cualquier parte de nuestro código incluso antes de que la función sea declarada');
}
funcionDeclarada();

// Funciones Expresadas
// Este tipo de funciones se usan usualmente const y ya no es necesario colocar un nombre a la función porque el nombre con el que declara la constante es el que se le asigna, además aqui entra otro concepto el cual es Funciones Anonimas, que es cunado una función no tiene nombre.

funcionExpresada();
const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir una función que se le a asignado como valor a una variable, si invocamos esta función antes de su declaración JS nos dirá... que no se puede acceder a la función antes de ser inicializada");
}
funcionExpresada();