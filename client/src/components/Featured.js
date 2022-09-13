
import './Featured.css';
const Featured=(props)=>{
    
      
    return(
            <div className="featured">
                 
                <div className="featured-item">
                    <img className='featured-img' src={props?.images} alt=""/>
                    <div className='featured-title'>
                        <h3>{props?.title}</h3>
                        <p>123 properties</p>
                    </div>
                </div>
            </div>
    
    );
}
export default Featured; 