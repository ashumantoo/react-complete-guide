import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from '../../containers/Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../../containers/FullPost/FullPost';


class RoutingBlog extends Component {
    render() {

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            {/* 
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> 
                            */}

                            {/**
                             * - Using Link property of the react router to stop app from 
                             *   reloading on the visiting to the new route instead of anchor tag
                             * 
                             * - Internally, React dom also converts this 'Link to' into the anchor
                             *   tag
                             * 
                             * - Link 'to' property can be a string as well as it can be a object
                             *   which can accept some parameters on the params
                             * 
                             */}
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?submit=true'
                            }}>New Post</Link></li> */}

                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa293f',
                                    textDecoration: 'none'
                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" render={() => <h2>Home 2</h2>} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} />
            </div>
        );
    }
}

export default RoutingBlog;