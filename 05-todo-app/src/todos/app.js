/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId )  => {


    // Cuando la función se autoinvoca, se ejecuta el código que está dentro de ella
    (() => {
        const app = document.createElement('div');
        app.innerHTML= '<h1>Hola Mundo</h1>';
        document.querySelector(elementId).appendChild( app ) ;
    })();

}