import { useRef } from "react";

import '../css/login.css'
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
const Login = () => {
    let navigate=useNavigate()
    let email=useRef("")
    let password=useRef("")

    let submit=(a)=>{
        a.preventDefault()
        let data={email:email.current.value,password:password.current.value}
        axios.post('http://localhost:3001/login',data).then((res)=>{
           
            if(res.data.status==200){
                alert(res.data.message)
              navigate('/home')  
            }
            else{
                alert("userId or password wrong")
            }
        })
    }
    return ( 
        <div className="login">
            <div className="data">
            <form action="" onSubmit={submit}>
                <input ref={email} type="email" placeholder="enter email" />
                <input ref={password} type="password" placeholder="enter password" /><br />
                <Link to="/signup" >SignUP</Link><br />
                <button>Login</button>
            </form>
            </div>
        </div>
     );
}
 
export default Login;