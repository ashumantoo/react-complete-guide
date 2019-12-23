import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import './Person.css';
import PropTypes from 'prop-types'

class Person extends Component {

    //****************************************************************** ***************/
    // Here This render() using return with a single div element
    //==================================================================================
    render() {
        console.log('[Person.js] rendering ....');
        return (
            <div className="Person" >
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }

    //==========================================================================================
    // Here We using the Auxiliary method to render the multiple adjacent element simultaneously 
    // Using the Higher Order Component Aux is a higher order component
    // Higher Order Component is a Component which wraps another component
    //==========================================================================================
    // render() {
    //     console.log('[Person.js] rendering ....');
    //     return (
    //         <Aux>
    //             <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
    //             <p> {this.props.children} </p>
    //             <input type="text" onChange={this.props.changed} value={this.props.name} />
    //         </Aux>
    //     );
    // }


    //=========================================================================================
    //Here We using Fragment to render the multiple adjacent element simultaneously
    //=========================================================================================
    // render() {
    //     console.log('[Person.js] rendering ....');
    //     return (
    //         <Fragment>
    //             <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
    //             <p> {this.props.children} </p>
    //             <input type="text" onChange={this.props.changed} value={this.props.name} />
    //         </Fragment>
    //     );
    // }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;
// export default withClass(Person);
