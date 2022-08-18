
import { useEffect } from "react";
import { useContext } from "react";
import { Authcontext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";
import { useState } from "react";
import Pagination from "../Components/Pagination";
import { useRef } from "react";

function Dashboard() {
  let [data,setdata]=useState([])
  let [page,setpage]=useState(1)

  let totalpages = useRef(0)
  let handlePageChange = (value)=>{
setpage(value)
  }

let {token,logoutUser}=useContext(Authcontext)
console.log(token,"token")
let handleclick = ()=>{
 
logoutUser()
}


useEffect(()=>{

  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
  .then((r)=>r.json())
  .then((r)=>{setdata(r.data)
  totalpages.current=r.totalPages
  })
},[page])
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={handleclick} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data = {data}></RestaurantTable>
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={totalpages.current} currentPage={page} handlePageChange={handlePageChange}  />
      </div>
    </div>
  );
}

export default Dashboard;
