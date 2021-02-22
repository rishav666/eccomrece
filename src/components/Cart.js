import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addtocart} from '../action/addtocart.js'
import Cartproduct from './cart/Cartproduct.js'
import Paymentdetail from './cart/Paymentdetail.js'
const Cart = (props) => {

  let product=useSelector(state=>state.addtocart)
  console.log(product);
  const getcartproduct=(product)=>{
    if(product.length){
      return(

        product.map(x=>{
          return(


            <Cartproduct product={x}/>)

        })
      )

    }
    else{
      return(
        <h1>its empty</h1>
      )
    }

  }


  return (


        <div >
          <div className="row ">
            <div className="col-sm-8">
            <h3 style={{"padding-left":"7rem"}}>My cart({product.length})</h3>
             <hr/>
             {getcartproduct(product)}
           </div>
           <div className="col-sm-4" >
            <Paymentdetail price={product}/>
            </div>
            </div>
    </div>
  )
}

export default Cart
