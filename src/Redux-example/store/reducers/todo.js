import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo = {
                id: Math.random(),
                todo: action.payload
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            }
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todo: state.todos.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todoReducer;