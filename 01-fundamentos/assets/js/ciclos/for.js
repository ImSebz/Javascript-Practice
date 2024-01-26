const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('For in');
for (let j in heroes) {
    console.log(heroes[j]);
}

console.warn('For of');
for (let k of heroes) {
    console.log(k);
}

console.warn('For each');
heroes.forEach((element) => {
    console.log(element);
});