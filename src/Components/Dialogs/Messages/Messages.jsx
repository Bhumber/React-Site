import React from "react";
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
    <div className={classes.messField}>
      <div className={classes.myMess + ' ' + classes.cloud}>
        <div className={classes.ava}></div>
        {props.message}
      </div>
      <div className={classes.answer + ' ' + classes.cloud}>
        <div className={classes.ava}></div>
        Hi
      </div>
    </div>
  );
};

export default Messages;