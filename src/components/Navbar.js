import React from 'react';
import Styles from './Navbar.module.css';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={Styles.header}>
            <div className = {Styles.listContainer}>
                <ul className={Styles.list}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
            <div className={Styles.logo}>
                <img className={Styles.logo}  src={Logo} alt='Logo'/>
            </div>
            
        </header>
    );
};

export default Navbar;