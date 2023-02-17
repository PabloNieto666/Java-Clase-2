const os = require('os');

let frecuencia = os.cpus().slice(0, 1).map((registro) => registro.speed);
console.log("la frecuencia del pc es de: " + frecuencia);

let windows = os.type();

console.log(windows);

module.exports = frecuencia;

