import '../css/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <div className="body1">
            <div className="text1">
                <p className='heading'>Welcome to Prime</p>
                <p className='heading2'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                <button>Sign in to join prime</button>
            </div>
        </div>
        <div className="body2">
            <div className="text2">
                <p className='heading'>Movie rentals on Prime Video</p>
                <p className='heading2'>Early Access to new movies, before digital subscription</p>
                <button>Rent now</button>
            </div>
        </div>
        <div className="body3 row">
            <div className="left col-6">
                <p className='heading'>Your favorite channels all in one place</p>
                <p className='heading2'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
            </div>
            <div className="right col-6">
            <button>LIONSGATE PLAY</button>
                <button>Discovery+</button>
                <button>eurosNow</button>
                <button>manrowmax</button>
                <button>hoichoi</button>
                <button>VF ott</button>
                <button>amc+</button>
                <button>DOCUBAY</button>
                <button>MUBI</button>
                <button>iwonder</button>
                <button>SRINGRAY</button>
                <button>curiosity</button>
            </div>
        </div>
        <div className="body4">
        <div className="text4">
                <p className='heading'>Even better with Fire TV Stick</p>
                <p className='heading2'>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
                <button>Get started</button>
            </div>
        </div>
        </div>
        
     );
}
 
export default Home;