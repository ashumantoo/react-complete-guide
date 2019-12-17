import React, { Component } from "react";
import Person from '../Person/Person';

class ListAndConditionals extends Component {
    state = {
        person: [
            { name: 'Max', age: 29 },
            { name: "Ashutosh", age: 27 },
            { name: 'John', age: 35 }
        ],
        otherState: 'some other value',
        showPerson: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            person: [
                { name: 'Max', age: 29 },
                { name: newName, age: 27 },
                { name: 'John', age: 30 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            person: [
                { name: 'Max', age: 29 },
                { name: event.target.value, age: 27 },
                { name: 'John', age: 30 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow })
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'White',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div>
                <h4>List and Conditional Example</h4>
                <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {this.state.showPerson ?
                    <div>
                        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Ashutosh Kumar')} />
                        <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangedHandler}> My Hobbies : Coding </Person>
                        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
                    </div> : null
                }
            </div>
        );
    }
}

export default ListAndConditionals;