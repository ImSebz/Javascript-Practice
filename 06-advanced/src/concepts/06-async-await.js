import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';
    const id3 = '5d86371fd55e2e2a30fe1ccb2';


    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        const hero3 = await findHero(id3);

        element.innerHTML = `Hero 1: ${hero1.name} - Hero 2: ${hero2.name} - Hero 3: ${hero3.name}`;

    } catch (error) {
        element.innerHTML = error;
    }



};

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero with id ${id} not found`;

    return hero;
}