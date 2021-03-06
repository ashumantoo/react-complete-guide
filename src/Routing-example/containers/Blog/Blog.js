import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from '../../containers/Posts/Posts';
import NewPost from '../NewPost/NewPost';


class RoutingBlog extends Component {
    state = {
        isAuthenticated: true
    }
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
                                to="/posts"
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

                {/* 
                 ===========================================================================
                 --> Here path="/:id" and path="/new-post" are similar because react router
                    in path="/new-post" treat new-post as an id for the path="/:id"

                 --> So react router does not distinguished between these two routes and it
                     loads both routes simultaneously.

                 --> So to solve this issue we should use Switch from the react router dom
                     it tells react to just load only one best fitting routes which its gets
                     first.
                ============================================================================      
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} /> 
                */}

                {/** Switch will load only one matching route if it found more than one matching route */}
                <Switch>
                    {/* Handling auth guard in react router */}
                    {this.state.isAuthenticated ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />

                    {/*
                    ---> Catching all the unknown routes which are not defined by displaying
                         Page not found or a 404 component
                    <Route render={() => <h1>Page Not Fount</h1>} /> */}

                    {/*Redirecting routes using the Redirect component of the react router dom 
                       inside the Switch case we can use 'from' and 'to' but outside the Switch 
                       we can only use 'to', we will not able to use 'from' */}
                    < Redirect from="/" to="/posts" />

                    {/*=====================================================================
                    --> Redirection of routes loading the same component for different routes
                    <Route path="/" component={Posts} /> */}

                </Switch>
            </div>
        );
    }
}

export default RoutingBlog;