import React from 'react';
import Styles from './Logos.module.css';

import Microsoft from "../images/microsoft.png";
import Samsung from "../images/samsung.png";
import Xiaomi from "../images/xiaomi.png";

const Logos = () => {
    return (
        <div className={Styles.container}>
            <h3>Who Support Us!</h3>
            <div>
                <img src={Microsoft} alt='Support Company'/>
                <img src={Samsung} alt='Support Company' />
                <img src={Xiaomi} alt='Support Company' />
            </div>
            
        </div>
    );
};

export default Logos;