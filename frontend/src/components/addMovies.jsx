import { useRef } from 'react'
import '../css/addmovies.css'
import axios from 'axios'
const AddMovies = () => {
    let movie=useRef("")
    let gerne=useRef("")
    let imageURL=useRef("")
    let year=useRef("")
    let time=useRef("")
    let IMDb=useRef("")
    let quality=useRef("")
    let description=useRef("")

    let submit=(a)=>{
        a.preventDefault()
        let data={movie:movie.current.value,gerne:gerne.current.value,imageURL:imageURL.current.value,year:year.current.value,description:description.current.value,IMDb:IMDb.current.value,time:time.current.value,quality:quality.current.value,}
        axios.post('https://primeclone.onrender.com/addMovie',data).then((res)=>{
            alert(res.data.message)
        })
    }
    return ( 
        <div className="AddMovies">
            <div className="add">
            <form action="" onSubmit={submit}>
                <input ref={movie} type="text" placeholder="enter movie name" />
                <input ref={gerne} type="text" placeholder="enter gerne" />
                <input ref={imageURL} type="imageURL" placeholder="enter imageURL" />
                <input ref={year} pattern="[0-9]{4}" type="number" placeholder='enter year' />
                <input ref={IMDb}  type="number" placeholder='enter IMDb' />
                <input ref={time} type="text" placeholder='enter time' />
                <input ref={quality} type="text" placeholder='enter quality' />
                <input ref={description} type="text" placeholder="enter description" /><br />
                <button>Add Movie</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddMovies;