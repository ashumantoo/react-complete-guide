import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionType from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/actions';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctrl)}>Store Results</button>
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
    //before the multiple reducers
    // return {
    //     ctrl: state.counter,
    //     storeResults: state.results
    // };

    //after multiple reducers we can access the state property on the name given to 
    //the reducers
    return {
        ctrl: state.ctr.counter,
        storeResults: state.res.results
    };
}

//dispatching the redux action
const mapDispatchToProps = dispatch => {
    return {
        //Dispatching the action without using the action creator
        // onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
        // onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
        // onAddCounter: () => dispatch({ type: actionType.ADD, val: 10 }),
        // onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, val: 15 }),
        // onStoreResult: (result) => dispatch({ type: actionType.STORE_RESULT, result: result }),
        // onDeleteResult: (id) => dispatch({ type: actionType.DELETE_RESULT, resultEleId: id })

        //dispatching the action using action creator
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

//connect() it self is a function which returns a function which takes then a component as a input
//so connect() is not really a higher order component, but
//Its a function which returns a higher order component(hoc) 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);