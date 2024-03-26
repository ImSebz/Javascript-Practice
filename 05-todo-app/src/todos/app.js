import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';


const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
};

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
    }

    // Cuando la función se autoinvoca, se ejecuta el código que está dentro de ella
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
        displayTodos();
    })();

    //Referencias HTML

    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUL = document.querySelector(ElementIds.TodoList);
    //Listeners

    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode != 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        newDescriptionInput.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        const dataID = element.getAttribute('data-id');
        // console.log(dataID);
        todoStore.toggleTodo(dataID);
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {

        const isDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        const dataID = element.getAttribute('data-id');

        if (!element || !isDestroy) return;

        todoStore.deleteTodo(dataID);
        displayTodos();
        
    });

} 