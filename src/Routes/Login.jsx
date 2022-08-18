import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {Authcontext} from "../Context/AppContext"

function Login() {
  let {loginUser}=useContext(Authcontext)

let [inputdata,setinputdata ]=useState({
  "email":"",
  "password":""
})
  let handlechange = (e)=>{
    let {name,value}=e.target
setinputdata({...inputdata,[name]:value})
  }
let handlesubmit = (event)=>{
event.preventDefault()
console.log(inputdata)
fetch("https://reqres.in/api/login",{
     method:"POST",
     body:JSON.stringify(inputdata),
     headers:{"Content-type": "application/json"}
 }).then((r)=>r.json()).then((r)=>{loginUser("ABCD")
  }).catch((e)=>{console.log(e)})


}

  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" name="email" onChange={handlechange} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            onChange={handlechange}
            name="password"
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
