import connectToMongo from './db.js'; // getting connectToMongo() from db.js that was exported
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import allUsersRoutes from "./routes/all-user.js";
import deleteUser from "./routes/deleteUser..js";
import updateUser from "./routes/updateUser.js";
import createuser from "./routes/createUser.js";
import authRoutes from "./routes/auth.js"; 


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);   
app.use("/api/users", allUsersRoutes);
app.use("/api/delete",deleteUser);
app.use("/api/udate",updateUser);
app.use("/api/create",createuser);
// Server Listen
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});