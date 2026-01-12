import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw",
    use_filename: true, // 🔥 keep original name
    unique_filename: true,
    public_id: (req, file) => {
      const baseName = file.originalname
        .replace(/\s+/g, "_")
        .replace(".pdf", "");
      return `${baseName}_${Date.now()}.pdf`; // 🔥 FORCE EXTENSION
    },
  },
});

const uploadResume = multer({ storage });

export default uploadResume;
