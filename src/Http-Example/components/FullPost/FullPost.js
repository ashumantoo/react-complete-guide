import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        //This componentDidMound() life cycle hook sometimes creates the infinite loop
        //because as it once load the loadedPost its always start loading again and again 
        // the same post.
        //So we need to check a condition that only loads the new post if the post id is
        // different from the current loaded post
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        console.log(response);
                        this.setState({ loadedPost: response.data });
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        // Here we need to check the loadedPost data of the state
        // if this was set then only return the jsx code of the post
        // otherwise this jsx code gives error like title is undefined because in the http
        // request, this runs in asynchronous way the loadedPost variable become true only
        // after the successfully getting the response from the http request 
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;