/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import EmojiFlags from "@material-ui/icons/EmojiFlags";


import './Header.css';




export class Header extends Component {

  search(){
        alert("Karo Search")
  }


  render() {
    
    return(
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://www.pngitem.com/pimgs/b/1-12001_amazon-com-logo-png.png"/>
            </Link>


            
        <Link to="/">
        <div className="header_nav">
        <LocationOnOutlined className="header_icon" />
        <div className="header_option">
            <span className="header_optionLineOne">Deliver to Sandy</span>
            <span className="header_optionLineTwo">Pune 411023</span>

        </div>

        </div> 
        </Link>   
        
        <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" onClick={this.search} />
        </div>

<div className="header_nav">

<div className="header_flag">
    <div className="header_option">
<img src="https://toppng.com/download/uzxiGtY687oWffazXataF92NRvgRZMhM1GpkLLuy2oypikLUBCUun8Y2HJbO71jD4MHHj0fP2ccWtiGoLzdbfNe3lL4FcEnSTUgSHrtm82kip68iC5nwTZKbhULEhrv2BKRIBtA96An8lMIuucGZ4MO4bELWkTflT1hu3eEE1TycU12zD9MrNDcEgUFLPGhPW558jON4/large" className="header_icon" />
</div>
</div>
        <div className="header_option">
            <span className="header_optionLineOne">Hello Sandy</span>
            <span className="header_optionLineTwo">Accounts & Lists</span>

        </div>
        <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>

        </div>
        <ShoppingBasket className="header_icon" />
        <div className="header_option">
            <span className="header_optionLineOne"> .</span>
            <span className="header_optionLineTwo">Cart</span>

        </div>
      
        </div>
        </div>
    );

  }

}