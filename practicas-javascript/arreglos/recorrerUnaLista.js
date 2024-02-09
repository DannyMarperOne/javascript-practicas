let lista = [];
console.log(lista);
lista.push("We Will Rock You", "La vida es una fiesta");
console.log(lista);
lista.push("Save Me")
lista.push("Love me again")
console.log(lista);

lista[2] = "Juguito de Piña";
console.log(lista[2]);

/* for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
let i = 0
while (i < lista.length) {
    console.log(lista[i]);
    i++;
} */

lista.forEach(rolita => console.log(rolita));