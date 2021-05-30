import React, { Component } from 'react';
import './Product.css';
// import { products } from '../../data';

export class Product extends Component {

  render() {

    // this.cards=products

    return (
        <div className="product">
        <div className="product_info">
          <p>{this.props.title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{this.props.price}</strong>
          </p>
          <div className="product_rating">
            {Array(this.props.rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <br/><br/><br/>
        <img src={this.props.image} alt="" />
  
        <button>Add to Basket</button>
      </div>
    );

  }

}
export default Product;