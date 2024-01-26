const carros = ['Honda', 'BWM', 'Mercedes', 'Ford', 'Volvo'];

const carros2 = ['Ferrari', 'Mazda', 'Toyota', 'Nissan', 'Audi'];

let i = 0; //10

// while( carros.length > i ) {
//     console.log(carros[i]);
//     i++;
// }

// while (carros[i]) {

//     if (i === 1) {
//         i++;
//         continue;
//     }
//     console.log(carros[i]);
//     i++;

// }

console.warn('While');


while (carros.length > i) {
    console.log(carros.pop());
    console.log(carros);
}

console.warn('Do While');
let j = 10; //10

do {
    console.log(carros2[j]);
    console.log(carros2.pop());
    console.log(carros2);
} while (carros2.length > j);    

