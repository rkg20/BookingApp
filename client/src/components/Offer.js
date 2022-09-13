const Offer=()=>{
    return(
        <div className="offer" style={{
            border:"none", 
            boxSizig:"border-box",display:"flex",
            height:"184px"
        }} >
            <div className="offer-img" style={{
                 width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
            }}>
                <img src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg" alt=""/>
            </div>
            <div className="offer-desc">
                <h3>Save 15% or more</h3>
                <p>This summer, make your dream trip a reality. Book and stay for less before 30 Sep 2022</p>
                <button>Explore deals</button>
            </div>
        </div>
    );
}
export default Offer;