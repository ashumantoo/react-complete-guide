import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import './Person.css';
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();  //after version 16.3 we can create ref using this approach
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus(); // react 16.3
    }

    //****************************************************************** ****************************/
    // Here This render() using return with a single div element
    //===============================================================================================
    //
    //===============================================================================================
    // ref Property of the React used to focused on the input element inside a class based components
    //
    // If we want to use this ref property of react inside a functional based components we should
    // used the useRef() hook by assigning its value to a const and then call it inside the useEffect()
    // this is necessary to use this ref inside the useEffect() hook because useEffect() render after
    // the react dom completely render the page, otherwise this ref will gives an error of undefiled
    // hook e.g for clicking a button
    /** 
        const toggleButtonRef = useRef(null);
        useEffect(){
            toggleButtonRef.current.click();
        }
    ==================================================================================================*/
    render() {
        console.log('[Person.js] rendering ....');
        return (
            <div className="Person" >
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old.</p>
                <p> {this.props.children} </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}      //one approach of using the ref  (older approach)
                    ref={this.inputElementRef}    //2nd approach - newer approach after react 16.3
                />
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
