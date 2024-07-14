import express from "express";
import { getAllParticipants, addParticipant, updateParticipant, getOneParticipant } from "../controllers/participantsController.js";


const router = express.Router();


router.get("/getallparticipants", getAllParticipants);
router.post("/getoneparticipants", getOneParticipant);
router.post("/addparticipant", addParticipant);
router.put('/updateparticipant', updateParticipant);

export default router;