import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Messages from "./Messages/Messages";
import AddField from "./AddField/AddField";

const Dialogs = (props) => {

  let namesMap = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} message={d.message} />);
  let messMap = props.state.messagesData.map( m => <Messages message={m.message} />);
  

  return (
    <div className={classes.dialogsBox}>
      <div className={classes.friendsSide}>{namesMap}</div>
      <div className={classes.dialogSide}>
        {messMap}
        <AddField dispatch={props.dispatch} state={props.state} />
      </div>
    </div>
  );
};

export default Dialogs;


