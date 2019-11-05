import React from "react";
import styles from "./NewDiscussion.module.css";
import useModal from "./useModal";
import DiscussionForm from "../NewDiscussion/discussionForm";

 
const NewDiscussion = () => {
    const {isShowing, toggle} = useModal();
    return (
        <div className = {styles.newdiscussion}>
            <button onClick={toggle}> + New Discussion </button> 
            <DiscussionForm isShowing={isShowing} hide={toggle} />
        </div>
    )
}

export default NewDiscussion;