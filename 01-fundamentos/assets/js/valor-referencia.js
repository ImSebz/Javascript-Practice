//Los datos primitivos se pasan por valor 
//y los objetos se pasan por referencia
//En javascript todo es un objeto menos los datos primitivos

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan }; // Operador spread (rompe la referencia)

ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos

const frutas = ['Coco', 'Banano', 'Aguacate'];

// const otrasFrutas = frutas;
console.time('slice');
const otrasFrutas1 = frutas.slice(); // Método slice (rompe la referencia) y crea un nuevo arreglo
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; // Operador spread (rompe la referencia) y crea un nuevo arreglo
console.timeEnd('spread');


otrasFrutas1.push('Manzana');
otrasFrutas2.push('Mango');

console.table({ frutas, otrasFrutas1 , otrasFrutas2 });