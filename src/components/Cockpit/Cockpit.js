import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

/***********************************************************************************
    *                               USEEFFECT HOOKS
    **********************************************************************************
    --> we can use useEffect hooks in functional component to see the life cycle hooks
        effect which we used in class based component only.
    --> This useEffect() hooks of the react always run. it runs when the component render
        or whenever the component updates.  
        
    --> We can change always running behaviour of the useEffect by passing a second 
        argument to the useEffect hooks which is a condition when you want to execute
        the useEffect only. not always.
        
    --> If you want to run the useEffect() hooks only for the first time when the 
        component render , we can pass an empty array to the second argument of the
        useEffect() hook    
    */

const Cockpit = (props) => {

    //This will run only the passed condition will be true
    // useEffect(() => {
    //     console.log('[cockpit.js] useEffect');
    //     //http request...
    //     setTimeout(() => {
    //         // alert('Saved data to Cloud');
    //     }, 1000)
    // }, [props.persons])

    //this will run only for the first time
    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //http request...
        setTimeout(() => {
            // alert('Saved data to Cloud');
        }, 1000)
    }, [])
    const classes = [styles.font, styles.skyblue].join(' '); // this join gives "red bold"
    return (
        <div>
            <h1>My React App</h1>
            <p className={classes}>This is really working!!!</p>
        </div>
    );
}

export default Cockpit;