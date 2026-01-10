import express from "express";
import {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
} from "../controllers/candidate.controller.js";
import protect from "../middleware/auth.js";
import uploadResume from "../middleware/uploadResume.js";
const router = express.Router();

router.post("/", uploadResume.single("resume"), createCandidate);
router.get("/", protect, getAllCandidates);
router.put("/:id/status", protect, updateCandidateStatus);

export default router;
