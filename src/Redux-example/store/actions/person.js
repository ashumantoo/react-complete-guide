import * as actionTypes from '../actions/actionTypes';

export const addPerson = (person) => {
    return {
        type: actionTypes.ADD_PERSON,
        personData: person
    }
}

export const removePerson = (id) => {
    return {
        type: actionTypes.REMOVE_PERSON,
        personId: id
    }
}