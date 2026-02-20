import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, "0.0.0.0", ()=> {
      console.log(`Server is listening on
        ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
