import express from "express";
import { createEnrollment, getEnrollmentsByUser } from "../controllers/enrollments.controllers.js";

const router = express.Router();

// Create enrollment
router.post("/", createEnrollment);

// Get all enrollments for a specific user
router.get("/:userId", getEnrollmentsByUser);

export default router;
