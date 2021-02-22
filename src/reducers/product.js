export default function product(state={},action){
  let {type}=action;
  if(type=="GETPRODUCT")
  {
    return action.payload;
  }
  else{
    return state;
  }
}
