import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import MyProfile from "./MyProfile/MyProfile.jsx";
import classes from './Profile.module.css';

const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <MyProfile />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  );
    
}

export default Profile;