
import { faBed, faCar, faHotel, faPlane, faTaxi,faCalendarDays,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import './Header.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {  useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header=(props)=>{

    const[destination,setDestination]=useState("");
    const[openDate,setOpenDate]=useState(false);
    const[openOption,setOpenOption]=useState(false);
    let[countAdult,setCountAdult]=useState(1);
    let[countChild,setCountChild]=useState(0);
    let[countRoom,setCountRoom]=useState(1);    
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection',
        },
    ]);
    
    const navigate=useNavigate();
    const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,countAdult,countChild,countRoom}})
    }
    // console.log(destination);
    return(
        <div className="header">
         <div className="header-container"> 
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item" onClick={()=>{ }}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faHotel}/>
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
            { props?.type!=='list' &&
                <> 
                <h1 className="header-title">Find your next stay</h1>
                <p className="header-desc">Search low prices on hotels, homes and much more...</p>
                <button className="header-btn"></button>
            
                <div className="header-search">
                    <div className="header-search-item">
                    <FontAwesomeIcon icon={faBed} className="header-icon"/>
                        <input type="text" placeholder="Where are you going?" className="header-search-input" onChange={(e)=>setDestination(e.target.value)}></input>
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="header-icon"/>
                        <span className="header-search-text" onClick={()=>{setOpenDate(!openDate)}}>
                            {`${format(date[0].startDate,'dd/MM//yyyy')} to ${format(date[0].endDate,'dd/MM/yyyy')}` }
                        </span>
                        
                        {
                            openDate && <DateRange
                                onChange={(item)=>{
                                    setDate([item.selection])
                                    }
                            }
                            ranges={date}
                            className="search-date"
                            />
                        }

                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faUser} className="header-icon"/>
                        <span className="header-search-text" onClick={()=>{setOpenOption(!openOption)}}>{`${countAdult} adult . ${countChild} children . ${countRoom} room`}</span>

                        { openOption &&
                        <div className="options">
                            <div className="option-item">
                            
                                <span className="option-text">Adult</span>
                                <div className="option-counter">
                                    <button className="option-counter-button" onClick={()=>{setCountAdult(countAdult>1? countAdult-1:countAdult=1)}} >-</button>
                                    <span className="option-counter-number">{countAdult}</span>
                                    <button className="option-counter-button" onClick={()=>{setCountAdult(countAdult>=10? countAdult=10 :countAdult+1)}}>+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="option-text">Children</span>
                                <div className="option-counter">
                                    <button className="option-counter-button" onClick={()=>{setCountChild(countChild>1?countChild-1:countChild=0)}}>-</button>
                                    <span className="option-counter-number">{countChild}</span>
                                    <button className="option-counter-button" onClick={()=>{setCountChild(countChild>=10?countChild=10:countChild+1)}}>+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="option-text">Rooms</span>
                                <div className="option-counter">
                                    <button className="option-counter-button" onClick={()=>{setCountRoom( countRoom>1? countRoom-1:countRoom=1)}}>-</button>
                                    <span className="option-counter-number">{countRoom}</span>
                                    <button className="option-counter-button"  onClick={()=>{setCountRoom(countRoom>=10? countAdult=10:countRoom+1)}}>+</button>
                                </div>     
                            </div>
                        </div>
                        }
                    </div>
                    <div className="header-search-bar">
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </>
            }
            </div>     
        </div>
    );
    
}

export default Header;