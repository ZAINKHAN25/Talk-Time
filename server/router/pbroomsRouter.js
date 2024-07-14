import express from "express";
import { getAllPbRooms, joinPbRoom, addPbRooms, leavePbRooms, joinRandomPbRoom } from "../controllers/pbRoomsController.js";


const router = express.Router();


router.get("/getallpbrooms", getAllPbRooms);
router.post("/addpbroom", addPbRooms);
router.post("/joinpbroom", joinPbRoom);
router.post("/joinrandompbroom", joinRandomPbRoom);
router.post("/leavepbroom", leavePbRooms);

export default router;