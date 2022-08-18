import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext =createContext()

function AppContextProvider({children}) {
    let navigate = useNavigate()

    let [isAuth,setisAuth]=useState(false)
    let loginUser= (value)=>{
        setisAuth(true)
        setToken(value)
        navigate("/dashboard")

    }
    let [token,setToken]=useState(null)
    let logoutUser = ()=>{
        setToken(null)
        setisAuth(false)
    }
    return <Authcontext.Provider value= {{token,isAuth,loginUser,logoutUser}}>{children}</Authcontext.Provider>
}

export default AppContextProvider;
