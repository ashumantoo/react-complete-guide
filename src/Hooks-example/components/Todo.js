import React, { useState } from 'react';

const Todo = props => {

    //============================ useState Hook ================================
    // This useState hooks returns two values exactly two value 
    // 1.First value is always our latest state 
    // 2.Second value is always a function to update the state with a new value
    //===========================================================================

    // const inputState = useState('');
    // const inputChangeHandler = (event) => {
    //     inputState[1](event.target.value);
    // }

    //Array Destructuring
    const [todoName, setTodoName] = useState('');

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button type="button">Add</button>
            <ul>

            </ul>
        </React.Fragment>
    )
};

export default Todo;