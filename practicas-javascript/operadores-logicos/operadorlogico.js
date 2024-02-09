// OPERADORES LÓGICOS

// Ejercicio con AND && 
// Escribe una condición “if” para comprobar que age(edad) está entre 14 y 90 inclusive.
// “Inclusive” significa que age puede llegar a ser uno de los extremos, 14 o 90.
let age = 15;
if (age >= 14 && age <= 90) {
    console.log('estas en la edad adecuada');
}

// Ejercicio con NOT !
// Escribe una condición if para comprobar que age NO está entre 14 y 90 inclusive.
// Crea dos variantes: la primera usando NOT !, y la segunda sin usarlo.
let age2 = 100;
if (!(age2 >= 14 && age2 <= 90)) {
    console.log('No estás en el rango de edad deseado');
}

// Ejercicio con OR ||
// Esto es una variante del ejercicio anterior, pero aqui utilizamos OR || 
if (age2 < 14 || age2 > 90) {
    console.log('No estás en el rango de edad deseado');
}