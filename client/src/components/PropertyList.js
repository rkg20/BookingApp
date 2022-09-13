import React from "react";
import Slider from "react-slick";
import Featured from "./Featured";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";


const PropertyList=()=>{ 
    
    const list=[
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
      var settings = {
        // dots: true,
        infinite: false,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
      };
    return(
        <div className="property-list" style={{ 
                width: "100%",
                maxWidth: "1024px",
                margin: "50px 60px 00px 120px",
                }}
        >
            <div className="property-list-heading">
               <h1>Browse by property type</h1>
            </div>
            <div className="property-slider">
                <Slider {...settings}>
                    {list.map((item)=><Featured title={item?.title} images={item?.images}/>)}
                </Slider>
            </div>
        </div>
    );
}
export default PropertyList;