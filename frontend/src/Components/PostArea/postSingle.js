import React from "react";
import styles from "./PostArea.module.css";

const Post = () => {
    return (
        <div className={styles.post}>
            <h3> Provide your title here </h3>
            <p> explain your question here </p>
        </div>
    )
}

export default Post;