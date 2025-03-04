import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./Database/index.js";
import authRouter from "./routes/auth.routes.js";
import jobRouter from "./routes/job.routes.js";

const app = express();    

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "chrome-extension://*" // Allow requests from Chrome extension
    ],
    credentials: true
}));

app.get("/", (req,res) => {
    res.send("hello world");
});

app.use("/auth", authRouter);
app.use("/api/jobs", jobRouter);

connectDB().then(() => {
    app.listen(3000, () => console.log("Server started on port 3000"));
}).catch(err => {
    console.error("Database connection failed", err);
});

