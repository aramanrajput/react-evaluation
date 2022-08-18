import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/AppContext";
import Dashboard from "../Routes/Dashboard";

function PrivateRoute({children}) {
let {isAuth} = useContext(Authcontext)
if(isAuth){
    return children 
}else{
    return <Navigate to = "/login"/>
    
}

}

export default PrivateRoute;
