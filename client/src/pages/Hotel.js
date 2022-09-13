import { faCircleXmark, faLocationDot,faCircleArrowLeft,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navbar from '../components/Navbar';
import './Hotel.css';
const Hotel=()=>{

    
    const photos=[
           
        {
            title:"Hotels",
            places:"123 places",
            images:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o="
        },
        {
            title:"Apartments",
            places:"123 places",
            images:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&o="
        },
        
        {
            title:"Ressorts",
            places:"123 places",
            images:"https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o="
        },
        {
            title:"Holiday Parks",
            places:"123 places",
            images:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&o="
        },
        
        {
            title:"Campsite",
            places:"123 places",
            images:"https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450283.jpeg?k=44ef0e355cff36883935e4c99b5c01b035eabebad278d22363210b2fe40b2791&o="
        },
        {
            title:"Boats",
            places:"123 places",
            images:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450095.jpeg?k=cd5e46e632dab722d22217813485efde31fbe82f5f26a624166edccdbe8187bc&o="
        },
        
             
       ]
     
    const handleOpen=(i)=>{
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove=(direction)=>{
        let newSlider;
        if(direction==='l'){
            newSlider=slideNumber===0? 5:slideNumber-1;
        }
        else{
            newSlider=slideNumber===5?0:slideNumber+1;
        }
        setSlideNumber(newSlider);
    }
    
    const[slideNumber,setSlideNumber]=useState(0);  
    const [open,setOpen]=useState(false);
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='hotel-container'>

                {open && <div className='slider' >
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')} />
                    <div className='slider-wrapper'>
                        <img src={photos[slideNumber].images} alt="" className='slider-image'/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')} />
                </div>}
                <div className='hotel-wrapper'>
                    <button className='booknow'>Reserve or Book Now</button>
                    <h1 className='hotel-title'>Grand Hotel</h1>
                    <div className='hotel-address'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>CP place New Delhi</span>
                    </div>
                    <span className='hotel-distance'>
                        Excellent location 500m meter from center
                    </span>
                    <span className='hotel-price-highlight'>
                        Book a stay $144 at this property and get a free airport taxi
                    </span>
                    <div className='hotel-images'>
                        {
                            photos.map((photo,i)=>{ 
                                return(
                                    <div className='hotel-image-wrapper'>
                                        <img onClick={()=>handleOpen(i)}  src={photo?.images} alt='' className='hotel-image'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='hotel-details'>
                        <div className='hotel-details-texts'>
                            <h1 className='hotel-title'>Stay in  the heart of New Delhi</h1>
                            <p className='hotel-desc'>

                            </p>
                        </div>
                        <div className='hotel-details-price'>
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Delhi , this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b>
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}
export default Hotel;