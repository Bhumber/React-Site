import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
      <NavLink to={"/friends/" + props.id} className={classes.FriendsItem}>
        <div className={classes.ava}>ava</div>
        <div className={classes.name}>{props.name}</div>
      </NavLink>
  );
}


export default FriendsItem;