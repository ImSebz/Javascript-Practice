/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {

    // const myGenerator = generatorFunction();
    // console.log( myGenerator.next() );

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Generar id:';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Generar id: ${value}`;
    };


    button.addEventListener('click', renderButton);

};



function* idGenerator() {
    let currentId = 0;

    while (true) {
        yield ++currentId;
    }
}


function* generatorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'No hay valores';
    yield 'No puedo hacer nada :(';
}

