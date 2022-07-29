import React from 'react';
import Styles from './Navbar.module.css';
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <header className={Styles.header}>
            <div className = {Styles.listContainer}>
                <ul className={Styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={Styles.logo}>
                <img className={Styles.logo}  src={Logo} alt='Logo'/>
            </div>
            
        </header>
    );
};

export default Navbar;