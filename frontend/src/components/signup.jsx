import { useRef } from "react";
import '../css/signup.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const SignUP = () => {
    let navigate=useNavigate()
    let name=useRef("")
    let email=useRef("")
    let password=useRef("")
    let cnfpwd=useRef("")

    let submit=(a)=>{
        a.preventDefault()
        let data={name:name.current.value,email:email.current.value,password:password.current.value,cnfpwd:cnfpwd.current.value}
        
        if(data.name && data.email && (data.password==data.cnfpwd)){
            axios.post('https://primeclone.onrender.com/signup',data).then((res)=>{
                alert(res.data.message)
                navigate('/login')
            })
        }
        else{
            alert("invalid credentials")
        }

       
    }
    return ( 
        <div className="signup">
            <div className="data">
            <form action="" onSubmit={submit}>
                <input ref={name} type="name" placeholder="enter name" />
                <input ref={email} type="email" placeholder="enter email" />
                <input ref={password} type="password" placeholder="enter password" />
                <input ref={cnfpwd} type="password" placeholder="confirm password" /><br />
                <button>Login</button>
            </form>
            </div>
        </div>
     );
}
 
export default SignUP;