import express from "express";
import noteRoutes from "./routes/notes.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", noteRoutes);

import userRoute from "./routes/users.route.js";

app.use("/api/auth", userRoute);

export default app;
