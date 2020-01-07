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
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}</li>
                    ))}
                </ul>
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
        ctrl: state.counter,
        storeResults: state.results
    };
}

//dispatching the redux action
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 15 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultEleId: id })
    }
}

//connect() it self is a function which returns a function which takes then a component as a input
//so connect() is not really a higher order component, but
//Its a function which returns a higher order component(hoc) 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);