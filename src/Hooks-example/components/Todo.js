import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = props => {

    //============================ useState Hook ================================
    // This useState hooks returns two values exactly two value 
    // 1.First value is always our latest state 
    // 2.Second value is always a function to update the state with a new value
    //===========================================================================

    //============================ Rules of the react hooks =====================
    // 1. You Must only use all the react hooks at the top level of the component
    //    function i.e the root level of the function body
    // 2. You must call the useState directly in your top level function body. You
    //    must not call usestate() hook inside any function or if statement or inside 
    //    the loop or inside the function of the function or nested function
    //===========================================================================

    // const inputState = useState('');
    // const inputChangeHandler = (event) => {
    //     inputState[1](event.target.value);
    // }

    //Array Destructuring and using multiple useState hook for separating the logic
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    //============================== useEffect() hook ==============================
    // 1.useEffect() hook get executed immediately as soon as the components gets
    //   loaded. that means we should say if you want to write a code that should
    //   run immediately after the component load you should write it inside the 
    //   useEffect() hook 
    //==============================================================================

    //we could use the piece of code which we want to execute as soon as the component
    //load outside the useEffect() hook like this getting the data from server using
    //axios but this is very bad practice 
    //the problem with calling this here would be that we call it inside the render 
    //life cycle that is bad for performance reason. React does lot of things behind
    //the seen when it render the component to updates the dom 
    //
    // axios.get('FIREBASE_REALTIME_DATABASE_API_URL').then(res => {
    //     console.log(res);
    // }).catch(error => {
    //     console.log(error);
    // });
    //================================================================================
    useEffect(() => {
        //fetching the todo list data from the server
        axios.get('FIREBASE_REALTIME_DATABASE_API_URL').then(res => {
            console.log(res);
            const todoData = res.data;
            const todos = [];
            for (const key in todoData) {
                todos.push({ id: key, name: todoData[key].name });
            }
            setTodoList(todos);
        }).catch(error => {
            console.log(error);
        });
    });
    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));

        //saving todoList data to the firebase server
        axios
            .post('FIREBASE_REALTIME_DATABASE_API_URL', { name: todoName })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </React.Fragment>
    )
};

export default Todo;