import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
      <NavLink to={"/dialogs/" + props.id} className={classes.friend}>
        <div className={classes.ava}>ava</div>
        <div className={classes.name}>{props.name}</div>
      </NavLink>
  );
}


export default DialogItem;


