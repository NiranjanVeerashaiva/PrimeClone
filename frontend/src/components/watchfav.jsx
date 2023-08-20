import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/watchmovies.css'
const WatchFav = () => {
    let params=useParams()
    let [fav, setfav] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:3001/favorite')
            let data = response.data
            setfav(data)
        }
        fetchdata()
    }, [])

    return (
        <div className="watch">
            <div className="mov">
                {fav.map((x) => {
                    if(x._id==params._id){
                    return (
                        <div className="image">
                            <img src={x.imageURL} alt="" />
                            <div className="content">
                                <div className="c">
                                <h1>{x.movie}</h1>
                                <p className="des">{x.description}</p>
                                <p className="det">IMDb {x.IMDb}&nbsp;&nbsp;&nbsp; {x.time}&nbsp;&nbsp;&nbsp; {x.year} &nbsp;&nbsp;&nbsp;{x.quality}&nbsp;&nbsp;&nbsp; {x.gerne} </p>
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

export default WatchFav;