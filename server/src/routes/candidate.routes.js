import express from "express";
import {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
} from "../controllers/candidate.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("resume"), createCandidate);
router.get("/", getAllCandidates);
router.put("/:id/status", updateCandidateStatus);

export default router;
