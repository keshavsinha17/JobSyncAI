import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
import {DB_NAME} from "./constant.js";
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://prestigiouscall:kesusinha123@cluster0.cenut.mongodb.net/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
