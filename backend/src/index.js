import app from "./app.js";

const port = 5001;

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on
        ${port}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
