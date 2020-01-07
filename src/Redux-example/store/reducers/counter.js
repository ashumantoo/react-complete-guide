import * as actionType from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    //statement using switch statement
    switch (action.type) {
        case actionType.INCREMENT:
            //assigning original object to a new variable so that we can 
            //manipulate the object not the original one
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
}

export default reducer;