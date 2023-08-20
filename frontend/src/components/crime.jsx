import axios from "axios";
import { useEffect, useState } from "react";
import '../css/catagories.css'
const Crime = () => {
    let [crime,setCrime]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('https://primeclone.onrender.com/movie')
            let data=response.data
            let res=data.filter((a)=>a.gerne=="Crime")
            setCrime(res)
        }
        fetchdata()
    },[])
    return ( 
       
        <div className="catagories">
        {crime.map((x)=>{
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
 
export default Crime;