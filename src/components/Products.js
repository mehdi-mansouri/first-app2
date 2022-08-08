import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';
import Styled from './Products.module.css';

class Products extends Component {
    constructor (props){
        super(props);
        this.state={
            products: []
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(response =>this.setState({
            products:response.data
        }));
    }
    render() {
        const { products } =this.state;
        return (
            <div className={Styled.container}>

                {
                    products.length?products.map(product=><Card id={product.id} key={product.id} image={product.image} name={product.title} cost={`${product.price} $`}/>):
                    <h1>Loding....</h1>
                }
            </div>
        );
    }
}

export default Products;