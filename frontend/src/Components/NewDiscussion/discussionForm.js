import React from "react";
import styles from "./NewDiscussion.module.css";
import ReactDOM from "react-dom";

const DiscussionForm = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className = {styles.modaloverlay}>
            <div className={styles.modalwrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={styles.modal}>
                    <div className={styles.modalheader}>
                        <button type="button" className={styles.modalclosebutton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <form>
                <input className = {styles.discussiontitle} type="text" placeholder="Discussion title..." />
                <textarea cols={60} rows={5} placeholder="Describe in detail..." />
                <input className = {styles.titletag} type="text" placeholder=" Add Category tag..."/>
                <input type="submit" value="Post" />
                </form>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;

export default DiscussionForm;