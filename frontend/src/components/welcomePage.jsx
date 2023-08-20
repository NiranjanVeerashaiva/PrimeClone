import { Link, useNavigate } from 'react-router-dom';
import '../css/welcome.css'
const Welcome = () => {
    return ( 
        <div className="welcome">
            <img src="https://i.makeagif.com/media/2-14-2019/BA3dFn.gif" alt="" />
            <marquee behavior="alternate" direction="">CLICK ANYWHERE TO ENTER</marquee>
           <Link to='/login'><span >abc</span></Link>

        </div>
     );
}
 
export default Welcome;