import React from "react";
import classes from './MessageText.module.css';

const MessageText = (props) => {
    return (
      <div className={classes.messages}>
        <div className={classes.myMess}>{props.message}</div>
      </div>
    );
}

export default MessageText;