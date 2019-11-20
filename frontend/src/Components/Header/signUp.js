import React from "react";
import styles from "../NewDiscussion/NewDiscussion.module.css"
import ReactDOM from "react-dom";

const SignUp = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
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
                <input className = {styles.discussiontitle} type="text" placeholder="User Name" />
                <input className = {styles.discussiontitle} type="text" placeholder="Password" />
                <br/>
                <input type="submit" value="Sign Up" />
                </form>
                </div>
            </div>
        </div>
    </React.Fragment>,document.body
):null;
export default SignUp;