import express from "express";
import { getAllPbRooms, joinPbRoom, addPbRooms, leavePbRooms, joinRandomPbRoom, searchServer } from "../controllers/pbRoomsController.js";


const router = express.Router();


router.get("/getallpbrooms", getAllPbRooms);
router.post("/addpbroom", addPbRooms);
router.post("/joinpbroom", joinPbRoom);
router.post("/joinrandompbroom", joinRandomPbRoom);
router.post("/leavepbroom", leavePbRooms);
router.post("/searchserver", searchServer);

export default router;