import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login"
import SingleRestaurantPage from "./SingleRestaurantPage"
import Dashboard from "./Dashboard"
import PrivateRoute from "../Components/PrivateRoute"
function AllRoutes() {

 
  return (
    <div>
  
     
      <Routes>

        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/dashboard"  element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/restaurants/:id"  element={<PrivateRoute><SingleRestaurantPage/></PrivateRoute>}/>

        
      </Routes>
    
      

    </div>
  );
}

export default AllRoutes;
