import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from '../../containers/Posts/Posts';
import NewPost from '../NewPost/NewPost';


class RoutingBlog extends Component {
    render() {

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" render={() => <h2>Home 2</h2>} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
}

export default RoutingBlog;