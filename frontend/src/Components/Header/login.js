import React from "react";
import styles from "./Header.module.css";


const Login = () => {
    return (
        <div className = {styles.userlogin}>
            <span>Sign up</span>
            <span> Sign in </span> 
        </div>
    )
}

export default Login;