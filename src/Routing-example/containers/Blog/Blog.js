import React, { Component } from 'react';

import classes from './Blog.module.css';
import Posts from '../../containers/Posts/Posts';


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
                <Posts />
            </div>
        );
    }
}

export default RoutingBlog;