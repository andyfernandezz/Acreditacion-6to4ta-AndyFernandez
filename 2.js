let alojamiento = parseFloat(prompt("Ingrese el gasto estimado para alojamiento:"));
let alimentacion = parseFloat(prompt("Ingrese el gasto estimado para alimentación:"));
let entretenimiento = parseFloat(prompt("Ingrese el gasto estimado para entretenimiento:"));


let costeTotal = alojamiento + alimentacion + entretenimiento;

console.log("El coste total del viaje es: $" + costeTotal.toFixed(2));