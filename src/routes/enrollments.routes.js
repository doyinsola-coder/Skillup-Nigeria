import { Router } from "express";
import { createEnrollment } from "../controllers/enrollments.controllers.js";


const router = Router();


router.post("/", createEnrollment);


export default router;