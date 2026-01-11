import Candidate from "../models/Candidate.js";
import { v2 as cloudinary } from "cloudinary";

export const createCandidate = async (req, res, next) => {
  try {
    console.log("Uploaded file object:", req.file);

    const { name, email, phone, jobTitle } = req.body;

    // let resumeUrl = null;

    // if (req.file) {
    //   resumeUrl = cloudinary.url(req.file.filename, {
    //     resource_type: "image",
    //     format: "pdf",
    //     flags: "inline", // 🔥 THIS IS THE KEY
    //   });
    // }

    const resumeUrl = req.file
      ? req.file.path.replace("/upload/", "/upload/fl_inline/")
      : null;
    const candidate = await Candidate.create({
      name,
      email,
      phone,
      jobTitle,
      resumeUrl,
    });

    res.status(201).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: candidates.length,
      data: candidates,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCandidateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const allowedStatus = ["Pending", "Reviewed", "Hired"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

    candidate.status = status;
    await candidate.save();

    res.status(200).json({
      success: true,
      data: candidate,
    });
  } catch (error) {
    next(error);
  }
};
