import React from "react";
import styles from "./PostArea.module.css";
import PostHeader from "./postHeader";
import Post from "./postSingle";
import NewDiscussion from "../NewDiscussion/newDiscussion";

const PostArea = () => {
    return (
        <div>
            <div>
                <NewDiscussion/>
            </div>
            <div className={styles.postarea}>
                <PostHeader/>
                <Post/>
                <Post/>
            </div>
            
        </div>

    )
}

export default PostArea;