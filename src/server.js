import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});
