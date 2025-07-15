import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";
import cors from "cors";
dotenv.config();

const app = express();


//middleware
app.use(express.json()); //this middle ware will parse a JSON bodies
app.use(ratelimiter);
app.use(cors(
  {
    origin: "http://localhost:5173"
  }
));

app.use("/api/notes", notesRoutes);
const PORT = process.env.PORT || 5001;

connectDB().then (() => {
app.listen(PORT, () => {
  console.log("server is running on port 5000");
});
})