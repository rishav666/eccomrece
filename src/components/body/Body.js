import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux';
import Card from './Card.js'
const Body = (props) => {
  let product=useSelector(state=>state.product)
  console.log(product);
  const renderProduct=(products)=>{
    return (
      products.map(x=>{
        return (
          <Card product={x}/>
        )
      })
    )
  }
  return (
    <div className="row lg-4 sm-3 md3">
  {renderProduct(product)}
    </div>
  )
}

export default Body
