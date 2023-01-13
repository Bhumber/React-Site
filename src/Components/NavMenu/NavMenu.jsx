import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';

const NavMenu = () => {
    return (
      <nav className={classes.nav}>
          <NavLink className={classes.key} to="/profile">
            <div className={classes.item}>Profile</div>
          </NavLink>
          <NavLink className={classes.key} to="/dialogs">
            <div className={classes.item}>Messages</div>
          </NavLink>
          <NavLink className={classes.key} to="/friends">
            <div className={classes.item}>Friends</div>
          </NavLink>
          <NavLink className={classes.key} to="/news">
            <div className={classes.item}>News</div>
          </NavLink>
          <NavLink className={classes.key} to="/music">
            <div className={classes.item}>Music</div>
          </NavLink>
          <NavLink className={classes.key} to="/settings">
            <div className={classes.item + ' ' + classes.settings}>Settings</div>
          </NavLink>
      </nav>

    );
} 

export default NavMenu;