import { Router } from "express";
import { createUser, getALLUsers } from "../controllers/users.controllers.js";


const router = Router();

router.post("/", createUser);
router.get("/", getALLUsers)


export default router;