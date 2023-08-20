import axios from "axios";
import { useEffect, useState } from "react";
import '../css/movie.css'
import { Link } from "react-router-dom";
const Favorite = () => {
    let [fav,setfav]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get('http://localhost:3001/favorite')
            let data=await response.data
            setfav(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="MOV">
        <marquee behavior="alternate" direction="">Click on the movie to watch</marquee>
        <div className="movie">
                {fav.map((x) => {
                    return (
                        <div className="display">
                            <div class="card">
                            <Link to={`/watchFav/${x._id}`}><img src={x.imageURL} class="card-img-top" alt="..." /></Link>
                                <div class="card-body">
                                    <p class="card-text">{x.movie}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>     
     );
}
 
export default Favorite;