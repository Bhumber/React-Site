import React from "react";
import classes from './AddPost.module.css';

const NewPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
    }

    let postChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
    
    return (
      <div className={classes.add}>
        <textarea 
                  onChange={postChange}
                  ref={newPostElement} 
                  value={props.state.newPostText}
                  className={classes.field}/>
        <button onClick={addPost}
                className={classes.button}>Add</button>
      </div>
    );
}

export default NewPosts;