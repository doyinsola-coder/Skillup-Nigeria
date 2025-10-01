import { Router } from "express";
import { createCourse, getAllCourses, getCourseById } from "../controllers/courses.controllers.js";


const router = Router();


router.post("/", createCourse);
router.get("/", getAllCourses)
router.get("/:id", getCourseById);

export default router;
