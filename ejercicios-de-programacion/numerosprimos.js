/* 

Un número entero mayor que 1 es llamado primo si no puede ser dividido sin un resto por ningún número excepto 1 y él mismo.

En otras palabras, n > 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.

Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.

Escribe el código que muestre números primos en el intervalo de 2 a n.

Para n = 10 el resultado será 2, 3, 5, 7.

PD. El código debería funcionar para cualquier n, no debe estar programado para valores fijos.

*/

let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i)
    }

/* 
Explicación 

1.Inicialmente i=2 y j=2 entonces el bucle externo se ejecutará pero el el bucle anidado no se ejecutará. omitiendo el bucle interno que imprime 2 que está al final del bucle principal console.log(i)

2.Los bucles terminan y i = 3. esta vez j < i es true así que comienza el bucle anidado.

3.Durante el primer bucle anidado i = 3 y j = 2

4.el continue no ejecutará i % j no lo es 0 así que termina y j aumenta. Ahora i=3 y j=3 y salidas e impresiones de bucle anidado 3

5.Ahora el i=4 y el bucle anidado se ejecutará porque j=2 y j<i.

6.La condición i % j es true. Así que esta vez continue nextPrime se ejecutará y el bucle externo comenzará de nuevo con i = 5.

7.Ahora i = 5 así se ejecutará el bucle anidado. Los valores de j será 2 3 4 en bucles anidados. Ninguno de ellos causará continue porque 5%2 5%3 o 5%4 no lo es 0.

8.El bucle anidado saldrá después j convertirse 5. Y se imprimirá i que es 5.

continue nextPrime lo hace todo. Comprobará si i % j == 0 significa i no es primo. Así que saltará de nuevo al bucle exterior con i = i + 1 y no irá el último a console.log()


*/