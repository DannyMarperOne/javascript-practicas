let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0)) {
    console.log("El año " + year + " es bisiesto");
}else{
    console.log("El año " + year + " no es bisiesto");
}