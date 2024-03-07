class Persona {

        nombre = '';
        edad = '';
        codigo = '';

    constructor( nombre, edad, codigo)  {
        this.nombre = nombre;
        this.edad = edad;
        this.codigo = codigo;
    }


    whoIAm() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }

    myCode() {
        this.whoIAm();
        console.log(`Mi código es ${this.codigo}`);
    }
}

const sebastian = new Persona('Sebastian', 25, 1);
const andres = new Persona('Andres', 28, 2);
console.log(sebastian); 
console.log(andres);

sebastian.myCode();