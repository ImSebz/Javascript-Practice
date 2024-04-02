import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    };

    const id1 = '5d86371fd55e2e2a30fe1ccb2';

    findHero(id1);

};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        console.log('Searching hero...');
        
        const hero = heroes.find( hero => hero.id === id );  
        
        if ( hero ) {
            resolve( hero );
            return;
        }
        else {
            reject(`Hero with id ${id} not found`);
        }

    } );


}