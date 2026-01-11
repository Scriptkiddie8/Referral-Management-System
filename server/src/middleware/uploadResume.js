import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import path from "path";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw",
    format: "pdf", // ✅ THIS IS THE MISSING LINE
    allowed_formats: ["pdf"],
    public_id: (req, file) => {
      const name = file.originalname.replace(".pdf", "").replace(/\s+/g, "_");
      return `${name}_${Date.now()}`;
    },
  },
});

// Wrap storage in multer to get the middleware
const uploadResume = multer({ storage });

export default uploadResume;
