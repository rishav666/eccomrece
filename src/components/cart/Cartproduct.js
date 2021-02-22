import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import './cartproduct.css'
import {deleteitem} from '../../action/addtocart.js'



const Cartproduct = (props) => {
  console.log("hii i am in cart product");
  console.log(props.product.image);
  const dispatch=useDispatch();
  const removefromcart=(id)=>{
  dispatch(deleteitem(id))
  }

  return (
    <div class="container bcontent">

          <div class="card" style={{width: "40rem"}}>
              <div class="row no-gutters">
                  <div class="col-sm-5">
                      <img class="card-img" src={props.product.image} alt="Suresh Dasari Card"/>
                  </div>
                  <div class="col-sm-7">
                      <div class="card-body">
                          <h5 class="card-title">{props.product.name}</h5>
                          <p class="card-text">{props.product.title}</p>
                          <a  >&#8377; {props.product.price}</a>
                          <br/>
                          <br/>
                          <a class="btn btn-danger" onClick={()=>{removefromcart(props.product._id)}}>Remove</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Cartproduct
