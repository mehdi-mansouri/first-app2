import React, { Component } from 'react';
import Style from './AboutUs.module.css';
class AboutUs extends Component {
    render() {
        return (
            <div className={Style.contain}>
                <h1 className={Style.title}>About us!</h1>
                <h3>Amazon Farsi</h3>
                <h3>Smartphone Shop in Asia.</h3>
            </div>
        );
    }
}

export default AboutUs;