import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./Database/index.js";
import  authRouter  from "./routes/auth.routes.js";
const app=express();    
app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use("/auth",authRouter);


connectDB().then(() => {
  app.listen(3000, () => console.log("Server started on port 3000"));
}).catch(err => {
  console.error("Database connection failed", err);
});

