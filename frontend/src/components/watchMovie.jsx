import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/watchmovies.css'
const WatchMovie = () => {
    let params=useParams()
    let [Movie, setMovie] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('https://primeclone.onrender.com/movie')
            let data = response.data
            setMovie(data)
        }
        fetchdata()
    }, [])

    let submit=(id)=>{
        Movie.filter((x)=>{
            if(x._id==id){
                axios.post('https://primeclone.onrender.com/favMovie',x).then((res)=>{
                    alert(res.data.message)
                })
            }
        })
    }

    return (
        <div className="watch">
            <div className="mov">
                {Movie.map((x) => {
                    if(x._id==params._id){
                    return (
                        <div className="image">
                            <img src={x.imageURL} alt="" />
                            <div className="content">
                                <div className="c">
                                <h1>{x.movie}</h1>
                                <p className="des">{x.description}</p>
                                <p className="det">IMDb {x.IMDb}&nbsp;&nbsp;&nbsp; {x.time}&nbsp;&nbsp;&nbsp; {x.year} &nbsp;&nbsp;&nbsp;{x.quality}&nbsp;&nbsp;&nbsp; {x.gerne} </p>
                                <button className="fav" onClick={()=>submit(x._id)}>Add to favorites</button>
                                <button className="wa">Watch now</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                })}
            </div>
        </div>

    );
}

export default WatchMovie;