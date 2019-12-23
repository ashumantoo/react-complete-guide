import React from 'react';

const WithClass = props => {
    console.log('here -------------', props);
    // eslint-disable-next-line no-unused-expressions
    <div className={props.classes}> {props.children}</div>
}

export default WithClass;