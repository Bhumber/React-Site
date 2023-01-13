import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';


const Dialogs = (props) => {

  let dialogsMap = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} message={d.message} />);
    
  return (
    <div className={classes.dialogsBox}>
      <div className={classes.friendsSide}>{dialogsMap}</div>
      <div className={classes.dialogSide}>
        <div className={classes.messField}>
          <div className={classes.myMess}>
            <div className={classes.ava}></div>
            ddgdfgdfgdfgd
          </div>
          <div className={classes.answer}>
            <div className={classes.ava}></div>
            dfgdfgdfgdfgdfgdf
          </div>
        </div>
        <div className={classes.addField}>
          <textarea className={classes.field}></textarea>
          <button className={classes.button}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;


