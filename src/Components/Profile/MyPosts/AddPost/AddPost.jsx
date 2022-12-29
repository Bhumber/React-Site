import React from "react";
import classes from './AddPost.module.css';

const NewPosts = () => {
    return (
        <div className={classes.add}>
            <form>
                <input className={classes.field} type="text"/>
            </form>
            <button className={classes.button}>Add</button>
        </div>
    );
}

export default NewPosts;