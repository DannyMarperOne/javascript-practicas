//Aqui el ejemplo de Llave Valor, una es la llave que seria nombre y el 
//valor seria daniel
const marper = {
    nombre: "Daniel",
    apellido: "Martinez",
    edad: 26,
    pasatiempos: ["Dormir", "Jugar", "Muchas Cosas"],
    soltero: false,
    contacto: {
        email: "dannymarper.32@gmail.com",
        cel: 2251093554,
        direccion: "av 5 de mayo"
    },
    saludar: function () {
        console.log("Hola")
    }
}

console.log(marper);

console.log(marper["nombre"]);
console.log(marper["edad"]);
console.log(marper.soltero);

console.log(marper.pasatiempos[1]);
console.log(marper.contacto.email);
marper.saludar();