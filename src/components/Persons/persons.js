import React, { Component } from 'react';
import Person from './Person/Person';

/**
 *  =============================================================================
 *                STATEFULL COMPONENT VS STATELESS COMPONENT
 *  ==============================================================================
 *  -->1. Statefull Component or Container Component - A Component that manage state 
 *        in his component.
 *     2. It can be a Class based Component or may be a Function based component
 *        both component can manage state using the state() and useState() hooks 
 *        respectively.
 * 
 * -->1. Stateless or Presentational Components - A Components that do not manage
 *       state in his Components.
 *    2. Stateless Components only works with props which is passed from another 
 *       component.
 * 
 * --> It is Recommended to separate splits projects files into the stateless components
 *      as well statefull componnents so that it will become easy to maintain and manage
 *      the project because you can easily identify which component will manage state and
 *      which not. 
 *     
 */

//This is a statefull component which does not implements state
class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot'};
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('[Persons.js] ComponentDidUpdate');
        console.log(snapshot);
        
    }

    render() {
        console.log('[Persons.js] ---> rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />
        });
    }

}

export default Persons;