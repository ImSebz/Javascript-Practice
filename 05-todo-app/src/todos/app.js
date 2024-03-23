import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';


const ElementIds = {
    TodoList: '.todo-list',
};

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());   
        renderTodos( ElementIds.TodoList, todos); 
    }

    // Cuando la función se autoinvoca, se ejecuta el código que está dentro de ella
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
        displayTodos();
    })();

} 