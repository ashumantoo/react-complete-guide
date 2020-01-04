import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Mantoo',
        submitted: false
    }
    componentDidMount() {
        //props provides by react router
        console.log(this.props);
    }
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios
            .post('/posts', post)
            .then(response => {
                console.log(response);

                //redirecting the page using the router props history object and push method
                //push method just push the page to the browser page state and if you click 
                //on the back button of browser we can visit the previous page
                // this.props.history.push('/posts');

                //redirecting the page using the replace method of the history object of the 
                //react router props. This replace method will replace the previous page stack
                //to the new page of the redirected routes, and from this if you click the back
                //button of the browser , you will not able to go back to the previous page.
                this.props.history.replace('/posts');

                //using the setState with setting a property
                // this.setState({ submitted: true });
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        //Conditional redirect after submitting the form data
        //if you want to redirect some other page we can use this logic
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;