import React from "react";
import styles from "./Header.module.css";

const signInStyle = {
    border: '1px solid #999',
    backgroundColor: '#fff',
    color: '#000',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    height: '30px'
};

const SignIn = () => {
    return (
    <div>
        <form>
            <input className = {styles.username} type="text" placeholder="User Name" />
            <input className = {styles.password} type="text" placeholder="Password" />
            <input style = {signInStyle} type="submit" value="Sign In"/>
        </form>
    </div>
    )
}

export default SignIn;