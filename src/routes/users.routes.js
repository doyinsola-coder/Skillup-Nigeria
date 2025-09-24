import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { LoginUser } from "../controllers/users.controllers.js";


const router = Router();

router.post("/",createUser);
router.post("/login", LoginUser);

router.get('/', async (req, res) => {
    res.json({ User: req.User });
});

export default router;