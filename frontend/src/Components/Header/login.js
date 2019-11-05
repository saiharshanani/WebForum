import React from "react";
import styles from "./Header.module.css";
import SignIn from "./sigIn";

const Login = () => {
    return (
        <div className = {styles.userlogin}>
            <SignIn/>
            <span style={{marginLeft:'300px',fontSize:'14px'}}>Create Account</span>          
        </div>
    )
}

export default Login;