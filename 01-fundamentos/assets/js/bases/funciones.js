
function saludar(nombre) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}



const retornoDeSaludar = saludar('Sebastian', 25, true, 'Colombia'); // 1

// console.log( saludar('Sebastian'));
// saludar2( 'Sebastian' );
// saludarFlecha();
// saludarFlecha2('Camila');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());
