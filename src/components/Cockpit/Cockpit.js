import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = () => {
    const classes = [styles.font, styles.skyblue].join(' '); // this join gives "red bold"
    return (
        <div>
            <h1>My React App</h1>
            <p className={classes}>This is really working!!!</p>
        </div>
    );
}

export default Cockpit;