import React from "react";
import classes from './MyProfile.module.css';

const MyProfile = () => {
    return (
      <div className={classes.profileInfo}>
        <div className={classes.ava}></div>
        <div className={classes.discription}>discription</div>
      </div>
    );
}

export default MyProfile;