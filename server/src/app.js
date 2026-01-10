import express from "express";
import cors from "cors";
import candidateRoutes from "./routes/candidate.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(express.json());

// app.use(cors());

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
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
