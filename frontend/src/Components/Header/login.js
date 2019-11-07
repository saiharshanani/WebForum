import React from "react";
import styles from "./Header.module.css";
import SignIn from "./sigIn";
import SignUp from "./signUp";
import useModal from "../NewDiscussion/useModal";


const Login = () => {
    const {isShowing, toggle} = useModal();
    return (
        <div className = {styles.userlogin}>
            <SignIn/>
            <span style={{marginLeft:'300px',fontSize:'14px'}} onClick = {toggle}>Create Account</span>
            <SignUp isShowing={isShowing} hide={toggle}/>          
        </div>
    )
}

export default Login;