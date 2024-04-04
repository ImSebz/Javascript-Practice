import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name} and ${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h3 style="color:#f00;">${error}</h3>
        `;
    };

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371f2343e37870b91ef1';

    let hero1;

    //! Promise All
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
        .catch(renderError);


    //! Forma 2
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch(renderError);

    //! Forma 1
    // findHero(id1)
    //     .then(hero1 => {
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);
    //Promise Hell

};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {
        console.log('Searching hero...');

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            console.log('Hero found!');
            return;
        }

        reject(`Hero with id ${id} not found`);

    });


}