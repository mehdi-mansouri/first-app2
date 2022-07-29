import React, { Component } from 'react';
import Styles from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <p>Search What you Want</p>
                <input placeholder='Search ...'/>
            </div>
        );
    }
}

export default Search;