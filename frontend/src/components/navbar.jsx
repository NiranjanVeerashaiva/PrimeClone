import '../css/navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/home">prime video</Link>
            </div>
            <div class="dropdown">
                <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <ul class="dropdown-menu ">
                    <li><Link to="/home" class="dropdown-item" href="#">Home</Link></li>
                    <li><Link to="/movies" class="dropdown-item" href="#">Movies</Link></li>
                    <li><Link to="addMovie" class="dropdown-item" href="#">Add Movies</Link></li>
                    <li><Link to="favMovie" class="dropdown-item" href="#">Favorite</Link></li>
                    <li><Link  class="dropdown-item" href="#">TV shows</Link></li>
                </ul>
            </div>
            <div class="dropdown">
                <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Store</a>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="#">ALL</Link></li>
                    <li><Link class="dropdown-item" href="#">Rent</Link></li>
                    <li><Link class="dropdown-item" href="#">Channels</Link></li>
                </ul>
            </div>
            <div className="tv">
            <p>Live TV</p>
            </div>
            <div class="dropdown">
                <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                <ul class="dropdown-menu">
                    <li><Link to="/action" class="dropdown-item" href="#">Action</Link></li>
                    <li><Link to='/crime' class="dropdown-item" href="#">Crime</Link></li>
                    <li><Link to="/thriller" class="dropdown-item" href="#">Thriller</Link></li>
                    <li><Link to="/comedy" class="dropdown-item" href="#">Comedy</Link></li>

                </ul>
            </div>
            <div className="LS">
            <span class="material-symbols-outlined text-info">search</span>
               <Link to="/login" href="">Login</Link>
               <Link to="/signup" href="">SignUp</Link>
            </div>
        </div>
    );
}

export default Navbar;