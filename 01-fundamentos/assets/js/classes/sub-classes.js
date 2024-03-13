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


class Empleado extends Persona{
    area = 'Software development';

    constructor(name, age, code) {
        super(name, age, code); // Llamar al constructor de la clase padre
    }

}

const sebastian = new Empleado('Sebastian', 25, 10);


// const sebastian = new Empleado();
console.log(sebastian);
sebastian.whoIAm();
sebastian.myCode();

