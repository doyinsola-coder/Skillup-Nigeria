import { Router } from "express";
import { createUser, LoginUser } from "../controllers/users.controllers.js";

const router = Router();

// Auth routes
router.post("/register", createUser);
router.post("/login", LoginUser);

// Test route
router.get("/", (req, res) => {
  res.json({ message: "User routes working 🚀" });
});

export default router;
