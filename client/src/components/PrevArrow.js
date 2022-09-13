import React from "react";

const PrevArrow=(props)=>{
    const {className,style,onClick}=props;
    return(
        <div className={className}
        style={{...style, 
        background:"#0071c2", 
        borderRadius:"50%", 
        display:"flex", 
        justifyContent:"center",
        alignItem:"center",
        padding:"4px",}}
        onClick={onClick}
        >
        </div>
    );
}
export default PrevArrow;