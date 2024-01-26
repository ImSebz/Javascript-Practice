// const elMayor = (a, b) => {
//     return (a > b) ? `${a} es mayor` : `${b} es mayor`	;
// };

const elMayor = (a, b) => (a > b) ? `${a} es mayor` : `${b} es mayor`;

const isMember = (member) => member ? 'Valor de la boleta 2$' : ' Valor de la boleta 10$';

console.log(elMayor(20, 15));

console.log(isMember(true));

const friend = false;
const friendsArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')()
    elMayor(10, 15)
];

console.log(friendsArr);

const notes = 59; // A+, A, B, C, D, F

const grade =
    notes >= 95 ? 'A+' :
        notes >= 90 ? 'A' :
                notes >= 80 ? 'B' :
                        notes >= 70 ? 'C' :
                                notes >= 60 ? 'D' : 'F';    

console.log({notes, grade});