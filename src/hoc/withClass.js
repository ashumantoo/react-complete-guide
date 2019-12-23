import React from 'react';

const withClass = (WrappedComponent, className) => {

    //this is a function that returns a functional components with jsx body
    //this is a second method of creating higher order components(HOC)
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}


export default withClass;