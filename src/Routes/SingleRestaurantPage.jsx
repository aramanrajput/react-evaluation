import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {

let [data,setdata]= useState({})
  var {id}= useParams()
console.log(id,"id")
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then((r)=>r.json())
    .then((r)=>{setdata(r.data)})
    .catch((e)=>{console.log(e)})
 
  },[])

  console.log(data,"data singlepage",data.name)
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{`${data.name}`}</h3>
      </div>
      <div data-testid="restaurant-type">{data.type}</div>
      <div data-testid="restaurant-rating">{data.rating}</div>
      <div data-testid="restaurant-votes">{data.number_of_votes}</div>
      <div data-testid="restaurant-price">{data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" src = {data.image} alt = {data.name} width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
