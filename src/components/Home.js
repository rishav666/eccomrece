import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import Headerslider from './Headerslider'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {product} from '../action/product'
import Body from './body/Body.js'
const Home = (props) => {

const dispatch=useDispatch();
useEffect(()=>{
  dispatch(product())
  console.log("product has been dispatch");
},[])
  return (
    <div>
    <Headerslider/>
    <Body/>
    </div>
  )
}

export default Home
