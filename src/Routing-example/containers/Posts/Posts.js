import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import classes from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        /**
         *===========================================================================
         this is the props provided by the router
         so react router just not routes the component to different routes but also
         it provides some value in the props
        
        --------------------------------------------------------------------
          -->This routing props does not gets passed down to the component it only
             passed to the called routes component e.g here the routing props from the
             <Posts> components will not get passed to the <Post> single post component
             because the <Post> component does not know anything about the routes
          -->Thus if we want to use the routing props we should pass this props from 
             the posts component to the post component using the property binding
        
          --> Or we can use the react router dom higher order component, withRouter(),
              wrapping the component with the withRouter() hoc.
        
         ===========================================================================
         */
        // console.log(this.props);
        axios
            .get('/posts')
            .then(res => {
                // console.log(res);
                //the response give 100 post at a time, just display 4 out of 100
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Mantoo'
                    }
                })
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({ selectedPostId: id });

        // Navigating to the page by programmatically using the react router props history
        // method, push();
        // pushing a new page in page stack of the browser.
        // this.props.history.push('/posts/' + id);
        this.props.history.push({ pathname: '/posts/' + id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something Went Wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //Navigating to the page using the Link and to of the react router dom
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => { this.postSelectedHandler(post.id) }}
                    />
                    // </Link>
                )
            });
        }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                {/** Nested routing this will load post details below the posts component */}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;