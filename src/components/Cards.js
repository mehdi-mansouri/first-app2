import React, { Component } from 'react';
import Styles from './Cards.module.css';
import Card from './card';

import apple1 from '../images/apple1.jpg';
import apple2 from '../images/apple2.jpg';
import apple3 from '../images/apple3.jpg';
import apple4 from '../images/apple4.jpg';
class Cards extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <Card image={apple1} name='Iphone 10' cost="530 $"/>
                <Card image={apple2} name='Iphone 11' cost="600$"/>
                <Card image={apple3} name='Iphone 12' cost="900 $"/>
                <Card image={apple4} name='Iphone 13' cost="1379 $"/>
            </div>
        );
    }
}

export default Cards;