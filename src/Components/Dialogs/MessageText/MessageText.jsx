import React from "react";
import classes from './MessageText.module.css';

const MessageText = (props) => {
    return (
      <div className={classes.messages}>
        <div className={classes.meMess}>{props.message}</div>
        <div className={classes.fMess}>hi</div>
      </div>
    );
}

export default MessageText;