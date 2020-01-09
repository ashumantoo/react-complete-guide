export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';

//creating a redux action using action creator method
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

//Redux action with passing the payload , i,e some extra data
export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const deleteResult = (resEleId) => {
    return {
        type: DELETE_RESULT,
        resultEleId: resEleId
    }
}


export const addPerson = (person) => {
    return {
        type: ADD_PERSON,
        personData: person
    }
}

export const removePerson = (id) => {
    return {
        type: REMOVE_PERSON,
        personId: id
    }
}