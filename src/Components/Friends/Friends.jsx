import React from "react";
import classes from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {    
  
  let friendsMap = props.state.friendsData.map( f => <FriendsItem name={f.name} id={f.id} />);
  
  return (
    <div className={classes.page}>
      <div className={classes.friendsBox}>
        <div className={classes.friend}>{friendsMap}</div>
        
      </div>
    </div>
  );
}

export default Friends;
