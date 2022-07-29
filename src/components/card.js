import React, { Component } from 'react';

import Styles from './card.module.css'
class card extends Component {
    
    render() {
        const {image ,name ,cost} = this.props;
        return (
            <div className={Styles.container}>
                <img src={image} alt='Picture'/>
                <h3>{name}</h3>
                <p>{cost}</p>
            </div>
        );
    }
}

export default card;