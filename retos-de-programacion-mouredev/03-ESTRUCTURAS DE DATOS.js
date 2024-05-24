/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */


//  Estructuras

// Arreglos (Arrays)
const autos = ["Mercedes", "RedBull", "Mclaren"];
console.log(Object.keys(autos)); // [ '0', '1', '2' ]

console.log(autos.length); //3
console.log(autos[1]); //RedBull

let first = autos[0];
let end = autos[autos.length - 1]; // Numero de elementos menos 1, y el resultado lo toma como la posición del indice
console.log(end); //Mclaren

let agregar = autos.push("Williams", "Aston Martin"); //Insertar nuevo elemento
console.log(autos);

let eliminar = autos.pop(); //Eliminar el ultimo elemento
console.log(autos);

let deleteFirt = autos.shift(); //Eliminar el primer elemento
console.log(autos);

let search = autos.indexOf("Williams"); //Encuentra el índice del elemento
console.log(search);

let deleteElement = autos.splice(search, 1); //splice(desde que indice, numero de elementos a eliminar)
console.log(deleteElement);
console.log(autos);