/* function mayor(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
let a = 8;
let b = 3;
let c = 15
let resultado1 = mayor(a, b);
let resultado2 = mayor(c, resultado1);

console.log(resultado2); */

function mayor(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
let a = 8;
let b = 3;
let c = 15;
let e = 6;
let resultado1 = mayor(a, b);
let resultado2 = mayor(c, e);
let resultado3 = mayor(resultado1, resultado2);

console.log(resultado3);