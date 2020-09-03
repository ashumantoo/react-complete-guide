import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

export const removeTodo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: id
    }
}
