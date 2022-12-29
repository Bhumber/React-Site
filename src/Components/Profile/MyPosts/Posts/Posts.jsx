import React from "react";
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.messageBlock}>
                <div className={classes.ava}>ava</div>
                <div className={classes.message}>
                    {props.postText}
                </div>
            </div>
            <div className={classes.likeBox}>
                <span className={classes.like}>like</span>
                <div className={classes.likeCount}>{props.likesCount}</div>
            </div>
        </div>
    );
}

export default Posts;