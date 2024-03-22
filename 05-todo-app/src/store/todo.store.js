import { Todo } from "../todos/models/todos.model"


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
};

const state = {
    todos: [
        new Todo('Terminar JavaScript Moderno'),
        new Todo('Terminar SQL de cero'),
        new Todo('Terminar TypeScript')
    ],
    filter: Filters.All,
};

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error('No implementado');
}


/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    throw new Error('No implementado');
}

const deleteCompletedTodo = () => {
    throw new Error('No implementado');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('No implementado');
}

const getCurrentFilter = () => {
    throw new Error('No implementado');
}


export default {
    deleteCompletedTodo,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}