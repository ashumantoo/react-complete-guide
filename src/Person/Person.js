import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    }
    return (
        {/* Props is simply an object giving access to all 
        the attributes which we pass to our own component */ },
        
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} year old.</p>
            {/* This children on props will get the value which is 
                defined between the opening and closing tag of the element */}
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;