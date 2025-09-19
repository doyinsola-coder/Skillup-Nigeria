import { Router } from "express";
import { createReview } from "../controllers/reviews.controllers.js";


const router = Router();

router.post("/", createReview);



export default router


