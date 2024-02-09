// DECLARACION DE VARIABLES

// lo más normal es declarar los arreglos con una constante

const a = []; //Así se declara un arreglo
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]]; //Se pueden agregar arreglos dentro de otrso arreglos
console.log(a);
console.log(b);

console.log(b.length); //Devuelve la cantidad de elementos

//Las posiciones en los arreglos siempre comienzan en 0
console.log(b[2]); //Imprime solo la palabra Hola que es el elemento que está en la posición 2
console.log(b[3][2]); //Aqui imprimime C porque en el primer arreglo entramos al elemento de la posicion 3 y como ese elemento tambien es un arreglo seleccionamos la posición 2 en la cual se encuentra el elemnto C
console.log(b[3][3][0]);

// Otra forma de declarar arreglos 
// Usando el método array.of
const c = Array.of("x", "y", "z", 1, 2, 3);
console.log(c);

// Usando el método fill....el arreglo es de 10 posiciones e inicializada con el valor de false
const d = Array(100).fill(false);
console.log(d);


// Metodos de los arreglos
const colores = ["Rojo", "Verde", "Azul"];

// Metodo push para agregar nuevos elemntos a los arreglos
colores.push("Negro", "Morado");
console.log(colores);

// Metodo pop elimina el ultimo elemento del arreglo
colores.pop();
console.log(colores);

// Metodo forEach sirve para asignar algo a cada una de los elementos del arreglo, en este caso por cada uno de los elementro, se le indica que se agregren en una etiqueta li, ademas que se le interporla el index para que sea posible mostrar un id para cada uno de los elemntos
colores.forEach(function(element,index) {
console.log(`<li id="${index}">${element}</li>`)
});