import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from '../src/Redux-example/store/reducer';

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

//redux store
const store = createStore(reducer);

//Provider is a helper component which allow us kind of inject our store into 
//the react components and passing store as property to the Provider component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
