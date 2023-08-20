import axios from "axios";
import { useEffect, useState } from "react";
import '../css/catagories.css'
const Action = () => {
    let [action,setAction]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('http://localhost:3001/movie')
            let data=response.data
            let res=data.filter((a)=>a.gerne=="Action")
            setAction(res)
        }
        fetchdata()
    },[])
    return ( 
        
        <div className="catagories">
        {action.map((x)=>{
            return(
                <div className="cata">
                    <img src={x.imageURL} alt="" />
                        <h3 className="name">{x.movie}</h3>
                </div>
            )
        })}
    </div>
     );
}
 
export default Action;