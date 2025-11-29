import express from "express";
 import User from "../myschema/UserSchema.js";
const router = express.Router();

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;