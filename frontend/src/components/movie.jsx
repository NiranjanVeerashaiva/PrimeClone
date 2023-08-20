import axios from "axios";
import { useEffect, useState } from "react";
import '../css/movie.css'
import { Link } from "react-router-dom";
const Movies = () => {
    let [Movie, setMovie] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:3001/movie')
            let data = response.data
            setMovie(data)
        }
        fetchdata()
    }, [])
    return (
        <div className="MOV">
            <marquee behavior="alternate" direction="">Click on the movie to watch</marquee>
            <div className="movie">
                {Movie.map((x) => {
                    return (
                        <div className="display">
                            <div class="card">
                            <Link to={`/watchMovie/${x._id}`}><img src={x.imageURL} class="card-img-top" alt="..." /></Link>
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

export default Movies;