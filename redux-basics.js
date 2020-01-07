const redux = require('redux');

const initialState = {
    counter: 0
}


//Reducer
const rootReducer = (state = initialState, action) => {
    //Reacting to the different action which are dispatched by store
    //All the state update logic comes here according to the type of 
    //the action
    if (action.type === 'INC_COUNTER') {
        //don't to this because mutation of the state object directly is not
        //a good way to update the state.
        // state.counter++;
        // return state;

        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

/*====================================================================
--> On the dispatch method of the store type property is mandatory
--> But with the type property we can also passed any type of data
    it could be value,name or a payload which is an object or array
*/
//Dispatching the Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
// store.dispatch({type:'SOMETHING',payload:{value:'',name:''}});
console.log(store.getState());

