import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

/* ✅ START SERVER FIRST */
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

/* ✅ CONNECT DB AFTER */
connectDB()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });