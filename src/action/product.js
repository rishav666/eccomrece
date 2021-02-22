import {fetchProduct} from '../api/product.js'

export const product=()=> async(dispatch)=>{
  try{
    const {data}=await fetchProduct();
    console.log("i am in action");
    dispatch({
      type:"GETPRODUCT",
      payload:data
    });
  }catch(error){
    console.log("error in the action folder");
  }
};
