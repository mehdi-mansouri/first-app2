import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './card.module.css';
import Down from "../images/down.svg";
import up from "../images/up.svg";
class card extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    downHandler=()=>{
        if (this.state.counter>0) {
            this.setState(prevState=>({
                counter:prevState.counter -1
            }))
        }
       
    }
    upHandler=()=>{
        this.setState(prevState=>({
            counter:prevState.counter +1
        }))
    }
    render() {
        const {image ,name ,cost , id} = this.props;
        const { counter } = this.state;
        return (
            <div className={Styles.container}>
                <img className={Styles.images} src={image} alt='arrow'/>
                <h3><Link to={`/products/${id}`}>{name}</Link></h3>
                <p>{cost}{counter?`* ${counter} = ${counter * Number(cost.split("$")[0])} $`:""}</p>
                <div className={Styles.counter}>
                    <img className={!counter ? Styles.deactive:""} src={Down} alt="Arrow" onClick={this.downHandler}/>
                    <span>{counter} </span>
                    <img  src={up} alt="Arrow" onClick={this.upHandler}/>

                </div>
            </div>
        );
    }
}

export default card;