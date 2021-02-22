export function addtocart(image,name,title,price,_id){
  console.log("call the addto cart action");
  return{
    type:"addtocart",
    image,
    name,
    title,
    price,
    _id
  }
}
export function deleteitem(id){
  return{
    type:"deleteitem",
    id
  }
}
