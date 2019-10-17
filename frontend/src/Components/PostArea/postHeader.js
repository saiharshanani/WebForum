import React from "react";
import styles from "./PostArea.module.css";

const PostHeader = () => {
    return (
        <div className = {styles.postareaheader}>
            <div className = {styles.postheader}>
                <span> DISCUSSIONS </span>
            </div>    
            <div className = {styles.postsortlist}>
                <span className = {styles.postsort}> LATEST </span>
                <span  className = {styles.postsort}> POPULAR </span>
            </div>
        </div>    
    );
}

export default PostHeader;