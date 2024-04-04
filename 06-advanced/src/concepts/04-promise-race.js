/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }


    Promise.race([
        slowPromise(),
        midPromise(),
        fastPromise(),
        fastPromise(),
        midPromise(),
        slowPromise()
    ]).then( renderValue )

};


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});

const midPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Mid promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
});