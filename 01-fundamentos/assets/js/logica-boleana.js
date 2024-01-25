const returnTrue = () => {
    console.log('Retorna true');
    return true;
};

const returnFalse = () => {
    console.log('Retorna false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true 

console.log(!returnFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false

console.log('--------------');
console.log(returnFalse() && returnTrue()); // false - solamente se ejecuta la primera función
console.log(returnTrue() && returnFalse()); // false - se ejecutan las dos funciones

console.warn('OR'); // true si al menos un valor es verdadero
console.log(true || false); // true
console.log(false || false); // false

console.log(returnTrue() || returnFalse()); // true

console.warn('&& y ||');
console.log('&&', true && true && true && false); // false - para el operador && todos los valores deben ser verdaderos
console.log( '||', true || false || false || false); // true - para el operador || solamente un valor debe ser verdadero

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150
const a2 = false && 'Hola Mundo' && 150; // false
const a3 = 'Hola' && 'Mundo' && soyFalso && true; // false
// No es tan comun hacer asignaciones con &&

const a4 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true // Ya no soy falso de nuevo
const a6 = soyFalso || soyUndefined || returnTrue() || 'Ya no soy falso de nuevo' || true 

console.log({ a1, a2, a3, a4, a5, a6 });

if (true || true || true || false) {
    console.log('Hacer algo');
} else{
    console.log('Hacer otra cosa');
}