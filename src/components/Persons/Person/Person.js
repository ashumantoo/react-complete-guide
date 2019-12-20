import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Aux';
import './Person.css';

class Person extends Component {

    //****************************************************************** ***************/
    // Here This render() using return with a single div element
    // render() {
    //     console.log('[Person.js] rendering ....');
    //     return (
    //         <div className="Person" >
    //             <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
    //             <p> {this.props.children} </p>
    //             <input type="text" onChange={this.props.changed} value={this.props.name} />
    //         </div>
    //     );
    // }

    //=========================================================================================
    //Here We using the Auxiliary method to render the multiple adjacent element simultaneously
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
    render() {
        console.log('[Person.js] rendering ....');
        return (
            <Fragment>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        );
    }

}

export default Person;