import React from 'react'
import PropTypes from 'prop-types'
import './card.css'
import Carddes from './Carddes'
import {Link} from 'react-router-dom'





const Card = (props) => {
  const name=props.product.name;
console.log(props);
const showitem=()=>{
  console.log("hii i got clicked");
  return(
      <Carddes/>
  )
}
  return (

    <div  class="card cardc" style={{width: "14rem"}}>
        <Link to={`/${props.product._id}`}>
  <img class="card-img-top cardimage" src={props.product.imageUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.product.productName}</h5>
    <button type="button" class="btn btn-danger">Add to Cart</button>
    <i class="heart fa fa-heart fa-2x"></i>

    <h3 class="card-footer">&#8377;{props.product.productPrice}</h3>
  </div>
</Link>

</div>

  )
}

export default Card
