import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "image", // 🔥 CHANGE THIS
    format: "pdf", // 🔥 FORCE PDF
    allowed_formats: ["pdf"],
    public_id: (req, file) => {
      const name = file.originalname.replace(".pdf", "").replace(/\s+/g, "_");
      return `${name}_${Date.now()}`;
    },
  },
});

const uploadResume = multer({ storage });

export default uploadResume;
