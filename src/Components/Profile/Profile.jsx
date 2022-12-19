import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src="https://rus-pic.ru/wp-content/uploads/2021/10/9e0ed134548b494bf17e11116089c025.jpg" />
      </div>
      <div>ava + discription</div>
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div className={classes.item}>Post 1</div>
      <div className={classes.item}>Post 2</div>
    </div>
  );
    
}

export default Profile;