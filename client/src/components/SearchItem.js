
import { useNavigate } from 'react-router-dom';
import './SearchItem.css';
const SearchItem=()=>{
    const id="abc";
    const navigate=useNavigate();
    const handleAvailability=()=>{
        navigate("/hotels/:"+id);
    }
    return(
        <div className="search-item">
            <img src="" alt="" className='search-item-img'/>
            <div className="search-item-desc">
                <h1 className="search-item-title">Tower Street Apartments</h1>
                <span className='search-item-distance'>500m from center</span>
                <span className='search-item-taxi'> Free Airport Taxi</span>
                <span className='search-item-subtitle'> Studio Apartment with Air conditioning</span>
                <span className='search-item-features'>Entire studio 1 bathroom -21m 1 full bed</span>
                <span className='search-item-cancel'>Free cancellation</span>
                <span className='search-item-cancel-subtitle'>You can cancel later, so lock in this great price today</span>
            </div>
            <div className='search-item-details'>
                <div className='search-item-rating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='search-item-detail-texts'>
                    <span className='search-item-price'>$123</span>
                    <span className='search-item-tax'> Includes taxes and fees</span>
                    <button className='search-item-check-button' onClick={handleAvailability}>See Availvility</button>
                </div>
            </div>
        </div>
    );
}
export default SearchItem;