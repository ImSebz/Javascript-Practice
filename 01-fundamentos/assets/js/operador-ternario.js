const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, está cerrado, hoy abrimos a las XX

if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
}