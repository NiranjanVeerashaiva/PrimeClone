import axios from "axios";
import { useEffect, useState } from "react";
import '../css/catagories.css'
const Thriller = () => {
    let [thriller,setThriller]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('http://localhost:3001/movie')
            let data=response.data
            let res=data.filter((a)=>a.gerne=="Thriller")
            setThriller(res)
        }
        fetchdata()
    },[])
    return ( 
        
        <div className="catagories">
        {thriller.map((x)=>{
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
 
export default Thriller;