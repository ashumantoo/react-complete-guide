import React, { Component } from "react";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from '../Person/Person';

class ListAndConditionals extends Component {
    state = {
        person: [
            { id: 'asdf1', name: 'Max', age: 29 },
            { id: 'afdrd1', name: "Ashutosh", age: 27 },
            { id: 'dfdf1', name: 'John', age: 35 }
        ],
        otherState: 'some other value',
        showPerson: false
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

        // this.setState({
        //     person: [
        //         { name: 'Max', age: 29 },
        //         { name: event.target.value, age: 27 },
        //         { name: 'John', age: 30 }
        //     ]
        // })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow })
    }

    removePersonHandler = (personIndex) => {

        //Directly working on the array is not a good practice
        //best way to make a copy of that array and then start manipulation using the splice()
        // const persons = this.state.person.slice();
        const persons = [...this.state.person];
        persons.splice(personIndex, 1);
        this.setState({ person: persons });
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        const rnd = Math.random();
        if (rnd > 0.7) {
            throw new Error('Something went wrong');
        }

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.person.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.removePersonHandler(index)}
                                // eslint-disable-next-line no-restricted-globals
                                changed={() => this.nameChangedHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                    {/* 
                    <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Ashutosh Kumar')} />
                    <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangedHandler}> My Hobbies : Coding </Person>
                    <Person name={this.state.person[2].name} age={this.state.person[2].age} /> */}
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
                {/* {this.state.showPerson ?
                    <div>
                        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Ashutosh Kumar')} />
                        <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangedHandler}> My Hobbies : Coding </Person>
                        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
                    </div> : null
                } */}
                {persons}
            </div>
        );
    }
}

export default ListAndConditionals;