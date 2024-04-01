import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id1 = "5d86371fd55e2e2a30fe1cc3";
    const id2 = "5d86371fd55e2e2a30fe1ccb";
    const id3 = "5d86371f97c29d020f1e1f6d";

    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || "Hero not found";

        if (error) {
            console.error(error);
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                console.error(error);
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} vs ${hero2.name}`;


            findHero(id3, (error, hero3) => {
                if (error) {
                    console.error(error);
                    element.innerHTML = error;
                    return;
                }

                element.innerHTML = `${hero1.name} vs ${hero2.name} vs ${hero3.name}`;
            });
        });

        // element.innerHTML = hero1.name;
    });


};

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);


    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return; //undefined
    }

    callback(null, hero);
};