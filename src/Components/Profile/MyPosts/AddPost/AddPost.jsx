import React from "react";
import classes from './AddPost.module.css';
import {addPostActionCreator, UNPTActionCreator} from './../../../Redux/profileReducer';

const NewPosts = (props) => {

    let addPost = () => {
      props.dispatch(addPostActionCreator());
    }

    let postChange = (event) => {
      let text = event.target.value;
      props.dispatch(UNPTActionCreator(text));
    }
    
    return (
      <div className={classes.add}>
        <textarea 
                  onChange={postChange}
                  value={props.state.newPostText}
                  className={classes.field}/>
        <button 
                onClick={addPost}
                className={classes.button}>Add</button>
      </div>
    );
}

export default NewPosts;