import React from 'react';

const person = (props) => {
    return (
        {/* Props is simply an object giving access to all 
        the attributes which we pass to our own component */ },

        <div>
            <p>I am {props.name} and I am {props.age} year old.</p>
            {/* This children on props will get the value which is 
                defined between the opening and closing tag of the element */}
            <p> {props.children} </p>
        </div>
    );
}

export default person;