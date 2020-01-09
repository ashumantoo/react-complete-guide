import * as actionTypes from '../actions/actionTypes';


export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}
/**=========================== redux-thunk ===============================================
 * --> Redux Thunk middleware allows you to write action creators that returns a functions
 *     instead of action. The Thunk can be used to delay the dispatch of an action, or to
 *     dispatch only if a certain condition met.The inner function functions receives the 
 *     store method 'dispatch' and 'getState' as parameters.
 *
 * 
 * */
export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            /**==========================================================================
             * --> Here getting the old counter state right before dispatching the event
             *     which then executed the code leads to saveResults in the reducers
             * 
             * --> So, If you needed then it is a nice utility function. DON'T over used
             *    it though
             */
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000)
    }
}

export const deleteResult = (resEleId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultEleId: resEleId
    }
}