import * as actionType from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    //statement using switch statement
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionType.DELETE_RESULT:
            //this is one way to Updating array without mutating the original array
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            //other logic
            //A filter() of array returns a new array without touching the old one
            //filter takes an function an as input, function is executed in each element in the array
            //and determines wheather this element full fill the certain condition to make it into the 
            //new array which is returned by filter or not.
            const updatedArray = state.results.filter(result => result.id !== action.resultEleId);
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
}

export default reducer;