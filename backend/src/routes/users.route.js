import { Router } from "express";
import { registerUser, loginUser } from "../controllers/users.controller.js";

const router = Router();

router.post("/", registerUser);
router.get("/", loginUser);

export default router;
