import express from "express";
import cors from "cors";
import noteRoutes from "./routes/notes.route.js";
import userRoute from "./routes/users.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();

const corsOptions = {
  origin: "https://smart-notes-ebon.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoute);

export default app;
