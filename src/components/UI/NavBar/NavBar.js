import React from 'react';

import styles from './NavBar.module.scss';

const NavBar = props => {
    return (
        <div className={styles.navbar}>
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    );
}

export default NavBar;