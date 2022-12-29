import React from "react";
import classes from './MyPosts.module.css';
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    let postsMap = props.state.postsData.map((textItem) => (
      <Posts postText={textItem.postText} likesCount={textItem.likesCount} />
    ));

    return (
        <div className={classes.myPosts}>
            <div className={classes.addPost}>
                <div className={classes.myPost}>My posts</div>
                <AddPost />
            </div>
            {postsMap}
        </div>
    );
}

export default MyPosts;