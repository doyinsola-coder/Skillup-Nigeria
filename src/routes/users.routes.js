import { Router } from "express";
<<<<<<< HEAD
import { createUser } from "../controllers/users.controllers.js";
import { LoginUser } from "../controllers/users.controllers.js";
=======
import { createUser, getALLUsers } from "../controllers/users.controllers.js";
>>>>>>> 228981815f7f45f2d9238abdc11f9b899a9a1a62


const router = Router();

<<<<<<< HEAD
router.post("/",createUser);
router.post("/login", LoginUser);
=======
router.post("/", createUser);
router.get("/", getALLUsers)
>>>>>>> 228981815f7f45f2d9238abdc11f9b899a9a1a62

router.get('/', async (req, res) => {
    res.json({ User: req.User });
});

export default router;