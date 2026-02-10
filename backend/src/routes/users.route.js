import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/", registerUser);
router.get("/", loginUser);
router.post("/logout", logoutUser);

export default router;
