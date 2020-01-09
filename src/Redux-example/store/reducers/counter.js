import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    counter: 0,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return updatedObject(state, { counter: state.counter + 1 });
        case actionType.DECREMENT:
            return updatedObject(state, { counter: state.counter - 1 });
        case actionType.ADD:
            return updatedObject(state, { counter: state.counter + action.val });
        case actionType.SUBTRACT:
            return updatedObject(state, { counter: state.counter - action.val });
        default:
            return state;
    }
}

export default reducer;



/*
const reducer = (state = initialState, action) => {
    //statement using switch statement
    switch (action.type) {
        case actionType.INCREMENT:
            //assigning original object to a new variable so that we can
            //manipulate the object not the original one

            //better to do all the data transformation logic here in the reducers
            //instead of the action creators ,but we can do data transformation logic
            //there also
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            return state;
    }
}*/