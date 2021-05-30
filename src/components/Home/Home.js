/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Home.css';
import Product from '../Product/Product';

import { products } from '../../data';
import { Grid, GridList, GridListTile } from '@material-ui/core';


export class Home extends Component {

  render() {
    return (
      <div className="landing">
        <img className="cover" src="./cover.jpg" />
      {/* <Product/> */}
  <div>
  <GridList cols={4}>
  {products.map(card =>(
    
    <GridListTile className="tile">
    <Product 
    title={card.title}
    image={card.image}
    price={card.price}
    rating={card.rating}
    /></GridListTile>
  ))}
  </GridList>

  </div>


      </div>
    );

  }

}
