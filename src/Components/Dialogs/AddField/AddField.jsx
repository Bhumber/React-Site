import React from "react";
import classes from './AddField.module.css';
import {sendMessActionCreator, UNMessTActionCreator} from './../../Redux/dialogsReducer';


const AddField = (props) => {
  let messRef = React.createRef();

  let sendMess = () => {
    props.dispatch(sendMessActionCreator())
  }

  let messChange = () => {
    let text = messRef.current.value;
    props.dispatch(UNMessTActionCreator(text));
  }

  return (
    <div className={classes.addField}>
      <textarea className={classes.field}
                ref={messRef}
                value={props.state.newMessText}
                onChange={messChange}
                />
                
      <button className={classes.button}
              onClick={sendMess}
      >Add</button>
    </div>
  );
};

export default AddField;