import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import './head.css'
import {useSelector} from 'react-redux';

import {Link} from "react-router-dom"
import logo from "./image/logo.png"
const Head = (props) => {
  let product=useSelector(state=>state.addtocart)



  return (
    <div className="head">

    <Link to="/"><img className="logo" src={logo}/></Link>
    <div className="Cart">
    <Link to="/cart"><button className=" btn btn-primary"><i class="fa  fa-cart-plus fa-2x"><sup>{product.length}</sup></i>Cart</button></Link>
    </div>
    </div>
  )
}

export default Head
