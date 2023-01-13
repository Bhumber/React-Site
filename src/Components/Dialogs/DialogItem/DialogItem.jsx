import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <NavLink to={"/messages"} className={classes.dialogBox}>
      <div className={classes.nameBox}>
        <div className={classes.ava}>ava</div>
        <div className={classes.name}>{props.name}</div>
      </div>
      <div className={classes.messageBox}>{props.message}</div>
    </NavLink>
  );
}


export default DialogItem;


