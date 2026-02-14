import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from "../controllers/notes.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", protect, getNotes);
router.post("/", protect, createNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);
router.get("/:id", protect, getNoteById);

export default router;
