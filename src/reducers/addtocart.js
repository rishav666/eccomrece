export default function addtocart(state=[],action){
  let{type,image,name,title,price,_id}=action;
  if(type=="addtocart"){
    return[
      ...state,
      {
        image,
        name,
        title,
        price,
        _id
      }
    ];
  }
  else if(type=="deleteitem"){
    var newstate=state.filter(function(x){
      return x._id !==action.id
    })

    console.log(action.id);
    console.log("have been delete");
    return newstate;
  }

  return state;

}
