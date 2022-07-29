import React from 'react';
import Styles from './Banner.module.css';
import BannerImage from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className={Styles.container}>
            <img src={BannerImage} alt='Banner' />
            <div className={Styles.textContainer}>
                <h1>Amazon Farsi</h1>
                <p> We'r learning <span>React.js</span></p>
            </div>
        </div>
    );
};

export default Banner;