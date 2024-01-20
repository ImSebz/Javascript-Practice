let games = ['Super Mario Bros', 'Zelda', 'Metroid', 'Metal Gear Solid'];
console.log('Largo:', games.length);

let first = games[0];
let last = games[games.length - 1];
// console.log('Primero:', first);
// console.log('Último:', last);
console.log({ first, last });

games.forEach((element, index, arr) => {
    console.log({ element, index, arr });
});

let newLenght = games.push('Fortnite'); //push sirve para agregar un elemento al final del arreglo

console.log({ newLenght, games });

newLenght = games.unshift('Binding of Isaac'); //unshift sirve para agregar un elemento al inicio del arreglo

console.log({ newLenght, games });

let deletedGame = games.pop(); //pop sirve para eliminar el ultimo elemento del arreglo
console.log({ deletedGame, games });

let position = 1;
console.log(games);
let deletedGames = games.splice(position, 2); //splice sirve para eliminar elementos del arreglo
console.log({ deletedGames, games });


let ZeldaIndex = games.indexOf('Binding of Isaac'); //indexOf sirve para encontrar el indice de un elemento del arreglo
console.log({ ZeldaIndex, games });

// games.shift(); //shift sirve para eliminar el primer elemento del arreglo

// console.log(games);


//TODO: Referencia, Valor
