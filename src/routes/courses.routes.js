import { Router } from "express";
import { createCourse } from "../controllers/courses.controllers.js";


const router = Router();


router.post("/", createCourse);

export default router;
