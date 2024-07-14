import express from "express";
import { getAllPbRooms, joinPbRoom, addPbRooms } from "../controllers/pbRoomsController.js";


const router = express.Router();


router.get("/getallpbrooms", getAllPbRooms);
router.post("/joinpbroom", joinPbRoom);
router.post("/addpbroom", addPbRooms);

export default router;