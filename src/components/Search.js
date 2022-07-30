import React, { Component } from 'react';
import Styles from './Search.module.css';

class Search extends Component {
    constructor(){
        super();
        this.state={
            text:""
        }
    }
    chaneHandler =event=>{
        this.setState({
            text:event.target.value,
        })
    }
    render() {
        return (
            <div className={Styles.container}>
               
                <p>Search What you Want</p>
                <div>
                    <input type="text" value={this.state.text} onChange={this.chaneHandler} placeholder='Search ...'/>
                    <br/>
                    <br/>
                    <span>{this.state.text} </span>
                </div> 
                
            </div>
        );
    }
}

export default Search;