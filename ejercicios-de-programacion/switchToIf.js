// Estructura Switch
switch (navegador) {
    case 'Edge':
        alert("¡Tienes Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Esta bien, soportamos estos navegadores también');
        break;
    default:
        alert('¡Esperamos que esta página se vea bien!');
}

// Estructura IF
let navegador = "Opera";

if (navegador === "Edge") {
    console.log("¡Tienes Edge!");
} else if (navegador == "Chrome" || navegador == "Firefox" || navegador == "Safari" || navegador == "Opera") {
    console.log("Esta bien, soportamos estos navegadores también");
} else {
    console.log("¡Esperamos que esta página se vea bien");
}