import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import './card.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {addtocart} from '../../action/addtocart.js'


const Carddes = () => {
  const color1="#ff9f00";
  const color2="white";
  const color3="#f26332"
  const [product,setProduct]=useState({});
  const [colorbuy,setcolorbuy]=useState(color1);
  const [colorcart,setcolorcart]=useState(color3);

const dispatch=useDispatch();
  useEffect(()=>{
    fetchItem();
  },[])

  const fetchItem=async()=>{
    const fetchItem=await fetch(`http://localhost:3002/getdataid/${id}`)
      const item=await fetchItem.json()
    setProduct(item)
  }

let {id}=useParams();
const changeColorbuy=()=>{
    const newColor = color2;
    setcolorbuy(newColor);
}
const changeColorcart=()=>{
    const newColor = color2
    setcolorcart(newColor);
    dispatch(addtocart(product.imageUrl,product.productName,product.productTitle,product.productPrice,product._id))

}


  return (
    <div class="d-flex align-items-stretch carddes">

          <div >
                 <img className="desimage" src={product.imageUrl}/>


          </div>
          <div  className="rightbox">
            <div >

                 <h2>{product.productName}</h2>
                 <br/>
                <p class="producttitle">{product.productTitle}</p>
                <br/>
                  <h3 class="card-footer">&#8377;{product.productPrice}</h3>

                <br/>
                <button onClick={()=>{changeColorbuy()}} style={{background:colorbuy}} className="btn btn-lg btn-buy">BUY NOW</button>
                <button onClick={()=>{changeColorcart()}}  style={{background:colorcart}}className="btn btn-lg btn-cart">ADD TO CART</button>
             </div>
          </div>
    </div>

  )
}

export default Carddes
