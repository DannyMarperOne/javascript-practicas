/*
#06 - RECURSIVIDAD

 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la
 *   sucesión de Fibonacci (la función recibe la posición).

*/

// RECURSIVE FIBONACCI
function fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}
console.log(fibonacci(9));

// RECURSIVE FIBONACCI
const sequence = [];
const iterations = 10;
const fibonacciRecursive = (sequence) => {
    sequence.length < 2 ? sequence.push(1) : sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    if (sequence.length === iterations) {
        return sequence.toString();
    }
    return fibonacciRecursive(sequence);
};
console.log(fibonacciRecursive(sequence));