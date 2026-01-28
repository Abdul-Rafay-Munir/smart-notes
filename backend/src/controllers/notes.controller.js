import { Notes } from "../models/notes.model.js";

const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json({ message: "All notes", notes });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = Notes.create({ title, content });

    res.status(201).json({ message: "Note created", note });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const updateNote = (req, res) => {
  res.status(200).json({ message: "post updated successfully" });
};

const deleteNote = (req, res) => {
  res.status(200).json({ message: "post deleted successfully" });
};

export { createNote, getNotes, updateNote, deleteNote };
