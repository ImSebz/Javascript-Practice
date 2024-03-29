class Persona {

    static _conteo = 0;
    static get conteo () {
        return Persona._conteo + ' instancias';
    }

    static mensaje() { 
        console.log(this.name);
        console.log('Hola a todos, soy un método estático');
    }

    name = '';
    age = '';
    code = '';
    cel = '';

    constructor(name = 'No name', age = 'No age', code = 'No code') {
        this.name = name;
        this.age = age;
        this.code = code;

        Persona._conteo++;
    }

    set setCel(cel) {
        this.cel = cel.toUpperCase();
    }

    get getCel() {
        return `El celular de ${this.name} es ${this.cel}`;

    }

    whoIAm() {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
    }

    myCode() {
        this.whoIAm();
        console.log(`Mi código es ${this.code}`);
    }
}

const sebastian = new Persona('Sebastian', 25, 1);
const andres = new Persona('Andres', 28, 2);
const lina = new Persona('Lina', 30, 3);


// console.log(sebastian);
// console.log(andres);

sebastian.myCode();

sebastian.setCel = 'col.1234567890';
// sebastian.comida = 'Calle 123';


// console.log(sebastian.getCel);

// console.log(sebastian);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo)
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);