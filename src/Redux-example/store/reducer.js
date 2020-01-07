const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD') {
    //     return {
    //         counter: state.counter + action.val
    //     }
    // }
    // if (action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - action.val
    //     }
    // }
    // return state;

    //statement using switch statement
    switch (action.type) {
        case 'INCREMENT':
            //assigning original object to a new variable so that we can 
            //manipulate the object not the original one
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        // return {
        //     counter: state.counter + 1
        // }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
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