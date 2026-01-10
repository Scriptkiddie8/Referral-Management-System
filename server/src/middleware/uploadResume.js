import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw", // IMPORTANT for PDFs
    allowed_formats: ["pdf"],
  },
});

const uploadResume = multer({ storage });

export default uploadResume;
