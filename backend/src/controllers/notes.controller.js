const getNotes = (req, res) => {
  res.status(200).json({ message: "post created successfully" });
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
