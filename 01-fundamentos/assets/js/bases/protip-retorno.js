
// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });



const persona = crearPersona( 'Sebastian', 'Camargo' );
console.log( persona );


// function imprimeArgumentos() {
//     console.log( arguments );
// }

const imprimeArgumentos2 = ( edad, ...args ) => { // ...args es un rest operator que permite recibir un número indeterminado de argumentos
    // console.log({ edad, args });
    return args;
}

// Despues del parametro rest operator no se pueden recibir más argumentos, antes de este si

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Sebastian', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Sebastian', 'Camargo' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );