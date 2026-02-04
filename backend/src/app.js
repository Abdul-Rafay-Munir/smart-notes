import express from "express";
import noteRoutes from "./routes/notes.route.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", noteRoutes);

export default app;
