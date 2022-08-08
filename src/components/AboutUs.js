import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import Style from './AboutUs.module.css';

const AboutUs=()=> {
 
    return (
        <div className={Style.contain}>
            <h1 className={Style.title}>About us!</h1>
            <h3>Amazon Farsi</h3>
            <h3>Smartphone Shop in Asia.</h3>
            <Outlet />
            <ul>
                <li><Link to='programmers'>Programmers</Link> </li>
                <li><Link to='drivers'>Drivers</Link> </li>
            </ul>
        </div>
    );
}

export default AboutUs;