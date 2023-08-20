import axios from "axios";
import { useEffect, useState } from "react";
import '../css/catagories.css'
const Comedy = () => {
    let [comedy,setComedy]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('http://localhost:3001/movie')
            let data=response.data
            let res=data.filter((a)=>a.gerne=="Comedy")
            setComedy(res)
        }
        fetchdata()
    },[])
    return ( 
        
        <div className="catagories">
        {comedy.map((x)=>{
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
 
export default Comedy;