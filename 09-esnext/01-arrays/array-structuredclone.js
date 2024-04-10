const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Cyborg',
    },
    {
        id: 4,
        name: 'Flash',
    },
];

const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Ironman';

console.table(superHeroes); 
console.table(superHeroesCopy);