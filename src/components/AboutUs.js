import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './AboutUs.module.css';
const AboutUs=()=> {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1,{replace:true});
    }
    return (
        <div className={Style.contain}>
            <h1 className={Style.title}>About us!</h1>
            <h3>Amazon Farsi</h3>
            <h3>Smartphone Shop in Asia.</h3>
            <button onClick={clickHandler}>Go TO Home</button>
        </div>
    );
}

export default AboutUs;