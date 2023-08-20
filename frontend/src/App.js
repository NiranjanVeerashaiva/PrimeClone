import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import SignUP from './components/signup';
import Welcome from './components/welcomePage';
import AddMovies from './components/addMovies';
import Movies from './components/movie';
import Action from './components/action';
import Crime from './components/crime';
import Comedy from './components/comedy';
import Thriller from './components/thriller';
import WatchMovie from './components/watchMovie';
import Favorite from './components/favorite';
import WatchFav from './components/watchfav';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUP/>}/>
      <Route path='/addMovie' element={<AddMovies/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/action' element={<Action/>}/>
      <Route path='/crime' element={<Crime/>}/>
      <Route path='/thriller' element={<Thriller/>}/>
      <Route path='/comedy' element={<Comedy/>}/>
      <Route path='/watchMovie/:_id' element={<WatchMovie/>}/>
      <Route path='/watchfav/:_id' element={<WatchFav/>}/>
      <Route path='/favMovie' element={<Favorite/>}/>
    </Routes>
    </BrowserRouter>r
    </div>
  );
}

export default App;
