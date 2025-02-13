import express from "express";
import { generateEnergyRecommendation } from "../utils/openaiService.js";

const router = express.Router();

router.post("/recommendations", async (req, res) => {
  try {
    const usageData = req.body; // Device usage data from MongoDB
    const recommendation = await generateEnergyRecommendation(usageData);
    res.json({ recommendation });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

export default router;
