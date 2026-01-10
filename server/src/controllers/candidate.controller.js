import Candidate from "../models/Candidate.js";

export const createCandidate = async (req, res, next) => {
  try {
    console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log(
      "Cloudinary API Key:",
      process.env.CLOUDINARY_API_KEY ? "ok" : "missing"
    );

    // 🔹 LOG the uploaded file info
    console.log("Uploaded file object:", req.file);

    const { name, email, phone, jobTitle } = req.body;

    let resumeUrl = null;
    if (req.file) {
      // req.file.path is like "https://res.cloudinary.com/.../image/upload/vxxx/..."
      // req.file.filename is like "resumes/YourFile_123456"
      resumeUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload/${req.file.filename}.pdf`;
    }

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
