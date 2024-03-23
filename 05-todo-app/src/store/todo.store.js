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
        new Todo('Terminar TypeScript'),
        new Todo('Terminar React cero a experto'),
        new Todo('Terminar NodeJS'),
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


const getTodos = ( filter = Filters.All ) => {
    
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Opción ${ filter } no es válida.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('La descripción es obligatoria');

    state.todos.push(new Todo (description));


}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });

}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

const deleteCompletedTodo = () => {
    state.todos = state.todos.filter( todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompletedTodo,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}