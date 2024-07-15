import express from "express";
import { addComment } from "../controllers/commentsController.js";


const router = express.Router();


router.post("/addcomment", addComment);

export default router;