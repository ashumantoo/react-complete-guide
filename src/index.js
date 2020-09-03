import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reducer from '../src/Redux-example/store/reducer';
import counterReducer from './Redux-example/store/reducers/counter';
import resultReducer from './Redux-example/store/reducers/result';
import personReducer from './Redux-example/store/reducers/person';
import todoReducer from './Redux-example/store/reducers/todo';

/**=================================INTERCEPTORS========================================
 * --> Sometimes we want to handle http request and response error no matter from which 
 *     page or which component that http request sent and response returned is calling 
 *     we always want to do something with the response and request may be we could handle 
 *     the error or may be could do something else for every request and response Globally.
 * 
 * --> So in this case we should used interceptors. 
 * --> Interceptors these are the function which we could define globally which will be
 *     executed for every request leaving your app and every response returning into it.
 * 
 * -->This is especially useful for example setting some common headers like authorization 
 *    header or may be for responses if you want to log responses or want to handle error
 *    globally. 
 */

//setting the base url for every http request and response
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

//setting some common headers
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

//setting header for only post request
axios.defaults.headers.post['Content-Type'] = 'application/json';



//http request interceptor
axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//http response interceptor
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//combine multiple reducers into single reducer by using the combineReducers from redux
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
    prs: personReducer,
    todo: todoReducer
})

/**==================================== Middleware ===========================================
 * --> Middleware is basically is a term used for a function or a code, which you could hook 
 *     into a process which then get executed as the part of the process without stopping then
 *     so we can add middleware and redux action still reaches to the redux reducers.
 * 
 * --> But using the middleware we can do something before redux action reaches to the redux
 *     reducers. that can be simply logging something or if you want to execute asynchronous
 *     code
 */

//A simple logging middleware
const logger = store => {
    //return a function which takes next as an argument
    return next => {
        //return a function which takes redux action an argument
        return action => {
            console.log('[middleware] Dispatching ', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux store
// const store = createStore(reducer);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

//Provider is a helper component which allow us kind of inject our store into 
//the react components and passing store as property to the Provider component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
