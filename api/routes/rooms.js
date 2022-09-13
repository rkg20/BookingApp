import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router=express.Router();

// router.get("/",(req,res)=>{
//     res.send("This is rooms sections")
// })

//CREATE
router.post("/:hotelid", verifyAdmin,createRoom);

//UPDATE
router.put("/:id",verifyAdmin,updateRoom);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//GET
router.get("/:id",getRoom);

//GET ALL
router.get("/",getRooms);

export default router;