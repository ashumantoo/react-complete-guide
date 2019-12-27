import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

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

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
