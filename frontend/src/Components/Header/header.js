import React from 'react';
import styles from "./Header.module.css";
import Logo from './logo';
import Login from './login';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Login/>
        </div>
    );
}

export default Header;