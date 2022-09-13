
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar=()=>{
    const navigate=useNavigate();
    const handleLogo=()=>{
        navigate('/');
    }
    
    return(
        <div className="navbar">
            <div className="navbar-container">
                <span className="logo" onClick={handleLogo}>Booking.io</span>
                <div className="nav-items">
                    <button className="nav-button" onClick="">Register</button>
                    <button className="nav-button" onClick="">Sign in</button>
                </div>
            </div>
        </div> 
    );
}
export default Navbar;