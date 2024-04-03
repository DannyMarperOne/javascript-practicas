// Formas de escribir una cadena de Texto
let nombre = "Dani";
let apellido = 'Marper';
let saludo = new String("Hola bb"); 
let lorem = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
console.log(nombre, apellido, saludo);


//Con la propiedad length podemos contar la cantidad de caracteres que tiene un string
console.log(nombre.length, apellido.length, saludo.length);

//Métodos para los string
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log(lorem.includes("hojas", lorem.trim()));


//PROPIEDADES: son caracteristicas
//MÉTODOS: son acciones o funciones que permiten ejecutar algo con la variable con la que se está trabajando.