import React, { Component } from 'react';
import classes from './AddPerson.module.css';

//Function based component
// const AddPerson = (props) => {
//     return (
//         <div className={classes.AddPerson}>
//             <button onClick={props.personAdded}>Add Person</button>
//         </div>
//     )
// }
// export default AddPerson;


//Converted the function based component to the class based so that we can use local
//component state
class AddPerson extends Component {
    //local Component ui state
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    render() {
        return (
            <div className={classes.AddPerson}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}
                />
                <input
                    type="text"
                    placeholder="Age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}
                />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson;