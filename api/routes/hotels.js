import express from "express";
import { createHotel, updateHotel,deleteHotel, getHotel, getAllHotel } from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();
//CREATE
router.post("/",verifyAdmin,createHotel);
// async(req,res,next)=>{

//     const newHotel=new Hotel(req.body)
//     try{
//         const saveHotel=await newHotel.save();
//         res.status(200).json(saveHotel)
//     }
//     catch(err){
//         next(err);
//     }
// });

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello from hotel side"); 
// })

// UPDATE
router.put("/:id", verifyAdmin,updateHotel);
// async(req,res)=>{
//     try{
//         const updatedHotel=await Hotel.findByIdAndUpdate(
//             req.params.id,
//             {$set:req.body},
//             {new:true}
//         );
//         res.status(200).json(updatedHotel);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// });

//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
// async(req,res)=>{
//     try{
//         await Hotel.findByIdAndDelete(
//             req.params.id
//         );
//         res.status(200).json("Hotel has been deleted");
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// });


//GET
router.get("/:id",getHotel);
// async(req,res)=>{
//     try{
//         const hotel=await Hotel.findById(req.params.id);
//         res.status(200).json(hotel);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// });

//GET ALL
router.get("/",getAllHotel);
// async(req,res,next)=>{
//     const failed=true;

//     // const err=new Error();
//     // err.status=404;
//     // err.message="Sorry not found!";
//     // if(failed)
//     //     return next(err);

//     // if(failed)
//     //     return next(createError(401,"You are not authenticated"));

    
//     try{
//         const hotels=await Hotel.find();
//         res.status(200).json(hotels);
//     }
//     catch(err){
//         next(err);
//     }
// });

export default router;