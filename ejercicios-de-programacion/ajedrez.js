for (let lin = 1; lin < 9; lin++) {
    let linea = "";
    for (let casilla = 0; casilla < 8; casilla++) {
        if (casilla % 2 == 0 && lin % 2 != 0) {
            linea = linea + "▢"
            linea = linea + "■"
        } else if (casilla % 2 != 0 && lin % 2 == 0) {
            linea = linea + "■"
            linea = linea + "▢"
        }
    }
    console.log(linea)
}


for (let lin = 1; lin < 9; lin++) {
    let linea = "";
    for (let casilla = 0; casilla < 8; casilla++) {
        if (casilla % 2 == 0 && lin % 2 == 0 || casilla % 2 != 0 && lin % 2 != 0) {
            linea = linea + "*";
        } else {
            linea = linea + "o"
        }
    }
    console.log(linea);
}