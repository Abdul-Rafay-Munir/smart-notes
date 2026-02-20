import express from "express";
import noteRoutes from "./routes/notes.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";
import userRoute from "./routes/users.route.js";

const app = express();

app.use(
  cors({
    origin: "https://smart-notes-ebon.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;