import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <div className={classes.text}>My Site</div>
        </header>  
    ); 
}

export default Header;