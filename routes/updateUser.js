import express from "express";
 import User from "../myschema/UserSchema.js";
const router = express.Router();

// UPDATE user by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;