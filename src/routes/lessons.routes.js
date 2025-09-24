import { Router } from "express";
import { createLesson } from "../controllers/lessons.controller.js";


const router = Router();

router.post("/", createLesson)

export default router;