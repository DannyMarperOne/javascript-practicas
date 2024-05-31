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


/* 
NOTA: En array y en objetos, Si una propiedad comienza con numero, guion bajo, guion, 
solo se puede acceder a el por medio de corchetes, con punto no
 */

//  Estructuras

// ************** Arreglos (Arrays) ***************

const autos = ["Mercedes", "RedBull", "Mclaren"]; //Creación de arreglo
console.log(Object.keys(autos)); // [ '0', '1', '2' ]

console.log(autos.length); //3
console.log(autos[1]); //RedBull

let first = autos[0];
let end = autos[autos.length - 1]; // Numero de elementos menos 1, y el resultado lo toma como la posición del indice
console.log(end); //Mclaren

let agregar = autos.push("Williams", "Aston Martin"); //Inserción de elemento al array
console.log(autos);

let eliminar = autos.pop(); //Borrar el último elemento del array
console.log(autos);

let deleteFirt = autos.shift(); //Borrar el primer elemento del array
console.log(autos);

let search = autos.indexOf("Williams"); //Encuentra el índice del elemento
console.log(search);

let deleteElement = autos.splice(search, 1); //splice(desde que indice, numero de elementos a eliminar)
console.log(deleteElement);
console.log(autos);

autos[1] = ("HAAS"); //Actualizar Elemento
console.log(autos);

let order = autos.sort(); //Ordenamiento de elementos
console.log(autos)


// ******************** Objetos (Object) **********************

const computadora = {
    procesador: "Intel-I7",
    teclado: "Dell",
    monitor: "HP",
    mouse: "Logitech",
    internet: true
}; //Creación de Objeto

console.log(computadora);
console.log(computadora.monitor); //Imprime propiedad

computadora.pulgadaMonitor = 18; //Inserción de nueva propiedad
console.log(computadora);

computadora.teclado = "Generico"; //Actualización de propiedad
computadora["mouse"] = "ElGato"; //De esta forma también es posible acceder a una propiedad
console.log(computadora);

delete computadora.teclado; //Eliminar propiedad
console.log(computadora);


//Función constructora de un Objeto e instancias de objetos
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993);
console.log(mycar); //Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);

car2.owner.name;
console.log(car2);



//****************** Set ******************

const setCreator = new Set([1, 2, 3, 4, 5]); //Cración de constructor Set

// Has devuelve si un elemento pertenece o no al set
console.log(setCreator.has(1)); //true
console.log(setCreator.has(5)); //true
console.log(setCreator.has(8)); //false

setCreator.add("Texto Libre"); //Agregar elemento a un set
const objectSet = {
    nombre: "JavaScript",
    version: "ECMAScript 6"
}
setCreator.add(10).add("Otro texto");
setCreator.add(objectSet); //Agregar elemento a un set
console.log(setCreator);

console.log(setCreator.size); //Retorno del tamaño del set


//Elimina un elemento existente del objeto set (Devuelve True refiriendose a que "El elemento fue eliminado exitosamente")
console.log(setCreator.delete(1));

setCreator.clear(); //Eliminar todos los elementos dentro del objeto set
console.log(setCreator.size);
console.log(setCreator);



// ***************** WeakSet ******************

//A un WeakSet solo es posible pasarle objetos.
const wk = new WeakSet; //Creación de constructor WeakSet
const wkOne = {};
const wkTwo = {};

wk.add(wkOne); //Agregar objeto al WeakSet
wk.add(wkTwo);

wk.has(wkOne); //Valida si existe dentro del WeakSet o no
wk.has(wkTwo);

wk.delete(wkOne); //Eliminación del objeto (Devuelve True "Fue eliminado exitosamente")
console.log(wk.has(wkOne));




// ****************** Map ****************

const myMap = new Map([
    ["Trampa", "Sombreros Mágicos"],
    ["Monstruo", "Mago Oscuro"],
    ["Especial", "Exodia"],
    ["Magica", "Espadas de luz reveladora"],
    [1000, "Vida Actual"]
]); //Creación del constructor Map

myMap.set("Dios Egipcio", "Obelisco el atormetador"); //Agregar un elemento Key-Value
console.log(myMap.delete("Trampa")); //Eliminar un elemento Key-Value
console.log(myMap.get("Magica")); //Obtienes el Value asociado al Key




const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));