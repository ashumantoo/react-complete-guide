import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../../components/Person/Person';
import AddPerson from '../../components/AddPerson/AddPerson';
// import * as actionType from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/actions';

class Persons extends Component {
    // state = {
    //     persons: [
    //         {
    //             name: 'Ashutosh',
    //             age: 28
    //         },
    //         {
    //             name: 'Mike',
    //             age: 30
    //         },
    //         {
    //             name: 'Steve',
    //             age: 35
    //         },
    //         {
    //             name: 'Stephine',
    //             age: 25
    //         }
    //     ]
    // }
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.person.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.prs.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onAddPerson: (name, age) => dispatch({ type: actionType.ADD_PERSON, personData: { name: name, age: age } }),
        // onRemovePerson: (id) => dispatch({ type: actionType.REMOVE_PERSON, personId: id })

        //dispatching the action using action creators
        onAddPerson: (name, age) => {
            const personData = { name: name, age: age };
            return dispatch(actionCreators.addPerson(personData))
        },
        onRemovePerson: (id) => dispatch(actionCreators.removePerson(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);