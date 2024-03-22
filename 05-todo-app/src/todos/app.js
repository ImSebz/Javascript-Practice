import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId )  => {

    // Cuando la función se autoinvoca, se ejecuta el código que está dentro de ella
    (() => {
        const app = document.createElement('div');
        app.innerHTML= html;
        document.querySelector(elementId).appendChild( app ) ;
    })();

} 