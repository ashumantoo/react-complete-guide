import * as actionTypes from '../actions/actionTypes';

//creating a redux action using synchronous action creators method
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

//Redux action with passing the payload , i,e some extra data
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
}

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
}