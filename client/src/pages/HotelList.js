import { useState } from "react";
import {  useLocation, } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { format } from "date-fns";
import './HotelList.css';
import { DateRange } from "react-date-range";
const HotelList=()=>{
    const location=useLocation();
    // console.log(location);
    let [date,setDate]=useState(location?.state?.date);
    let [openDate,setOpenDate]=useState(false);
    let [destination,setDestination]=useState(location?.state?.destination);
    let [countAdult,setCountAdult]=useState(location?.state.countAdult);
    let [countChild,setCountChild]=useState(location?.state.countChild);
    let [countRoom,setCountRoom]=useState(location?.state.countRoom);
    if(countAdult>10 || countChild>10 || countRoom>10){
        if(countAdult>10)
            countAdult=10;
        else if(countChild>10)
            countChild=10;
        else if(countRoom>10){
            countRoom=10;
        }
    }
    if(countAdult<0 || countChild<0 || countRoom<0){
        if(countAdult<0)
            countAdult=1;
        else if(countChild<0)
            countChild=0;
        else if(countRoom<0){
            countRoom=1;
        }
    }
    
    
    return(
       <div>
            <Navbar/>
            <Header type="list"/>

            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-title">Search</h1>
                        <div className="list-item">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} onChange={(e)=>setDestination(e.target.value)}/>
                        </div>
                        <div className="list-item">
                            <label>Check-in date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0]?.startDate,'dd/MM/yyyy')} to ${format(date[0]?.endDate,'dd/MM/yyyy')}`}</span>
                            {
                               openDate && <DateRange 
                                    onChange={(item)=>{
                                        setDate([item.selection])
                                        }   
                                    }
                                    ranges={date}

                                />
                            }
                        </div>
                        <div className="list-item">
                        
                            <label>Options</label>
                            <div className="list-option">
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Min Price <small>per night</small>
                                </span>
                                <input type="number" className="list-option-input"/>
                            </div>
                        

                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Max Price <small>per night</small>
                                </span>
                                <input type="number" className="list-option-input" />
                            </div>
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Adult
                                </span>
                                <input type="number" min={1} max={10} className="list-option-input" placeholder={countAdult} onChange={(e)=>setCountAdult(e.target.value)}/>
                            </div>
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Children
                                </span>
                                <input type="number" min={0} max={10} className="list-option-input" placeholder={countChild} onChange={(e)=>setCountChild(e.target.value)}/>
                            </div>
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Rooms
                                </span>
                                <input type="number" min={1} max={10} className="list-option-input" placeholder={countRoom} onChange={(e)=>setCountRoom(e.target.value)} />
                            </div>
                            </div>
                        </div>
                        
                        <button>Search</button>
                    </div>
                    <div className="list-result">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
       </div>
    )
}

export default HotelList;