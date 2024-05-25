// Uso de un array para tabular un conjunto de valores

valores = [];
for (let x = 0; x < 10; x++) {
    valores.push([2 ** x, 2 * x ** 2]);
}
console.table(valores);