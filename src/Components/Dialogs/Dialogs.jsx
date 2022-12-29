import React from "react";
import classes from './Dialogs.module.css';
import MessageText from './MessageText/MessageText.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';


const Dialogs = (props) => {

  let dialogsMap = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);

  let messageMap = props.state.messagesData.map( m => <MessageText message={m.message}/>);
    
  return (
    <div className={classes.page}>
      <div className={classes.dialogsBox}>
        <div className={classes.friendsBox}>{dialogsMap}</div>
        <div className={classes.messagesBox}>{messageMap}</div>
      </div>
    </div>
  );
}

export default Dialogs;


