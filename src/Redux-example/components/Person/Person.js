import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person} onClick={props.clicked}>
            <h3>Name : {props.name}</h3>
            <p>age : {props.age}</p>
        </div>
    )
}

export default person;