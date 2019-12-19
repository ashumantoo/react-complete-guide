import React, { Component } from "react";
import Person from '../Persons/persons';

class ListAndConditionals extends Component {
    constructor(props) {
        super(props)
        console.log('[List.js] --> Constructor');
    }
    state = {
        person: [
            { id: 'asdf1', name: 'Max', age: 29 },
            { id: 'afdrd1', name: "Ashutosh", age: 27 },
            { id: 'dfdf1', name: 'John', age: 35 }
        ],
        otherState: 'some other value',
        showPerson: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[List.js] --> getDrivedStateFromProps ', props);
        return state;
    }

    componentDidMount() {
        console.log('[List.js] ---> componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.person[personIndex]
        }
        // const person = Object.assign({}, this.state.person[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({ person: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow })
    }

    removePersonHandler = (personIndex) => {
        const persons = [...this.state.person];
        persons.splice(personIndex, 1);
        this.setState({ person: persons });
    }

    render() {
        console.log('[List.js] ---> render');

        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {/**Person component is separated in different file */}
                    <Person
                        persons={this.state.person}
                        clicked={this.removePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
            buttonStyle.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.person.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.person.length <= 1) {
            classes.push('bold'); //classes = ['red','bold']
        }

        return (
            <div>
                <h4 className={classes.join(' ')}>List and Conditional Example</h4>
                <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default ListAndConditionals;