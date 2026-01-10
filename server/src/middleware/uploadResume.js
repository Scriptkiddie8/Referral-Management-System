import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import path from "path";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw", // raw is required for PDFs
    allowed_formats: ["pdf"], // only allow PDFs
    public_id: (req, file) => {
      // preserve original name (without spaces) + timestamp
      const name = file.originalname.split(".")[0].replace(/\s+/g, "_");
      return `${name}_${Date.now()}`; // extension will be automatically added by Cloudinary
    },
  },
});

export default storage;
