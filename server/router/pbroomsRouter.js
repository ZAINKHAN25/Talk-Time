import express from "express";
import { getAllPbRooms, joinPbRoom, addPbRooms, leavePbRooms } from "../controllers/pbRoomsController.js";


const router = express.Router();


router.get("/getallpbrooms", getAllPbRooms);
router.post("/addpbroom", addPbRooms);
router.post("/joinpbroom", joinPbRoom);
router.post("/leavepbroom", leavePbRooms);

export default router;