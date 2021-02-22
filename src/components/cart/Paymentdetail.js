import React,{useEffect,useState} from 'react';
import "./paymentdetail.css";
import {useSelector} from 'react-redux';

const  Paymentdetail=()=>{


let product=useSelector(state=>state.addtocart)

const [money,setMoney]=useState(0);
const [count,setCount]=useState(0);
var money1=0;

  useEffect(()=>{
    setCount(product.length)




       product.map(x=>{


         money1+=x.price
         setMoney(money1)
       })


  },[])

const findmoney=()=>{
    var mon=0;
    product.map(x=>{
      mon+=x.price
    })
    return(
      <span>{mon}</span>
    )
}


  return(
    <div class="mainbox" style={{position:"fixed",width:"100%"}}>
    <h3  style={{color:"#939393"}}>PRICE DETAILS({product.length})</h3>
    <hr/>
    <div class="price">
    <span>Price</span><span style={{marginLeft:"20rem"}}>{findmoney()}</span>
    </div>

    <div class="price"><span>Discount</span><span style={{marginLeft:"18rem",color:"#8abc8d"}}>0</span></div>

    <div class="price"><span>Delivery charge</span><span style={{marginLeft:"15rem",color:"#8abc8d"}}>NULL</span></div>

    <hr/>
    <h3>Total amount{findmoney()}</h3>

    </div>
  )
}



export default Paymentdetail;
