import express from "express";
import User from "../myschema/UserSchema.js";

const router = express.Router();

// ✅ Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const foundUser = await User.findOne({ username });
    if (!foundUser)
      return res.status(404).json({ message: "User not found" });

    // Simple password match (for learning — not secure for production)
    if (foundUser.password !== password)
      return res.status(401).json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      user: foundUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
