import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element, callback) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    //TODO: Implement this
    fabButton.addEventListener('click', () => {
        throw new Error('Not implemented');
    });
}