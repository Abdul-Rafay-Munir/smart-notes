import { Notes } from "../models/notes.model.js";

const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json({ message: "All notes", notes });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error });
  }
};

const createNote = (req, res) => {
  res.status(201).json({ message: "post created successfully" });
};

const updateNote = (req, res) => {
  res.status(200).json({ message: "post updated successfully" });
};

const deleteNote = (req, res) => {
  res.status(200).json({ message: "post deleted successfully" });
};

export { createNote, getNotes, updateNote, deleteNote };
