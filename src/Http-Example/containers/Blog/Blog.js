import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';
import classes from './Blog.module.css';


class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
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
            });
    }

    render() {
        const posts = this.state.posts.map(post => {            
            return <Post key={post.id} title={post.title} author={post.author} />;
        });

        return (
            <div>
                <section className={classes.Posts}>
                    {/* <Post />
                    <Post />
                    <Post /> */}
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;