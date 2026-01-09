import express from "express";
import {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
} from "../controllers/candidate.controller.js";
import upload from "../middleware/upload.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.post("/", upload.single("resume"), createCandidate);
router.get("/", protect, getAllCandidates);
router.put("/:id/status", protect, updateCandidateStatus);

export default router;
