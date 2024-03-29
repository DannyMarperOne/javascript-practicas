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
    },
    decirMiNombre: function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad`);
    }
}

console.log(marper);

// Acceder a los valores espcificos de los objetos
/* La notación con corchetes ya no es muy utilizada, acutalmente se 
utiliza el . como se ve en las siguientes lineas*/
console.log(marper["nombre"]);
console.log(marper["edad"]);
console.log(marper.soltero);

console.log(marper.pasatiempos[1]);
console.log(marper.contacto.email);
marper.saludar();
marper.decirMiNombre();


// Metodos de los objetos
console.log(Object.keys(marper));
console.log(Object.values(marper));