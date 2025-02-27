import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
import {DB_NAME} from "./constant.js";
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
