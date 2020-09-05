import React, { Component } from 'react'

class BasicForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: "",
      comment: "",
      topic: "react"
    }
  }

  titleChangeHandler = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value
    })
  }

  commentChangeHandler = (event) => {
    this.setState({
      ...this.state,
      comment: event.target.value
    })
  }

  topicSelectHandler = (event) => {
    this.setState({
      ...this.state,
      topic: event.target.value
    })
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>Basic Form Example</p>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.titleChangeHandler}
            />
          </div>
          <div>
            <label>Comment</label>
            <textarea
              type="text"
              value={this.state.comment}
              onChange={this.commentChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="">Topic</label>
            <select value={this.state.topic} onChange={this.topicSelectHandler}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BasicForm
