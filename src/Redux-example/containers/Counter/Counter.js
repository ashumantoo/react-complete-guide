import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctrl} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} /> */}

                {/* using redux dispatch action */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
            </div>
        );
    }
}

//this mapStateToProps, store an instruction about how will this state manage by redux should
//be mapped to props you used in this container or component

//This actually store a function which expect a state stored in the redux as a input and returned
//a javascript object which is a map of props names and slices of the state stored in the redux
const mapStateToProps = state => {
    return {
        ctrl: state.counter
    };
}

//dispatching the redux action
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' })
    }
}

//connect() it self is a function which returns a function which takes then a component as a input
//so connect() is not really a higher order component, but
//Its a function which returns a higher order component(hoc) 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);