
const sebz = {
    nombre: 'Sebastian',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// sebz.imprimir();

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}


const camila = new Persona('Camila', 25);
const sebastian = new Persona('Sebastian', 25);
const carlos = new Persona('Carlos', 26);
camila.imprimir();
sebastian.imprimir();
carlos.imprimir();


// Esta metodologia ya no se usa, se usa la de clases

