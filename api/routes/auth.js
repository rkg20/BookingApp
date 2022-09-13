import express from "express";
import { login, register } from "../controllers/authController.js";
// import User from "../models/User.js";

const router=express.Router();

//REGISTER
router.post("/register",register);
// async(req,res,next)=>{
//     try{
//         const newUser=new User({
//             username:req.body.username,
//             email:req.body.email,
//             password:req.body.password,
//         })

//         await newUser.save()
//         res.status(201).json("User has been created")
//     }catch(err){
//         next(err);
//     }
// })

//LOGIN
router.post("/login",login);

export default router;