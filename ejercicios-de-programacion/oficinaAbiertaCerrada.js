let hour = 12;
let isWeekend = false;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("La oficina esta cerrada."); // Es fin de semana
}else{
    console.log("Abierto")
}