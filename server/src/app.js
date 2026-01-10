import express from "express";
import cors from "cors";
import candidateRoutes from "./routes/candidate.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
const app = express();

const allowedOrigins = [
  "https://referral-workoai.vercel.app",
  "http://localhost:5000", // optional, for local testing
];

app.use(express.json());
// app.use(cors({ origin: "https://referral-workoai.vercel.app/" }));
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow tools like Postman
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `CORS blocked: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use("/api/candidates", candidateRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Candidate referral System");
});

export default app;
