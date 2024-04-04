import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {


    const id1 = '5d86371f2343e37870b91ef1';
    console.log('Inicio de componente');

    element.innerHTML = 'Loading...';

    findHero(id1)
        // .then((name) => element.innerHTML = `Hero: ${name}`)
        .then(name => element.innerHTML = `Hero: ${name}`)
        .catch(error => element.innerHTML = `Error: ${error}`);


    console.log('Fin de componente');

};

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    

    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero not found with id: ${id}`;

    return hero?.name;

}