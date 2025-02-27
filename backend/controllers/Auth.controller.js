import mongoose from "mongoose"
import {User} from "../models/user.Model.js"
import axios from "axios"
import jwt from "jsonwebtoken"

import {oAuth2Client} from "../utilities/googleConfig.js"
const googleLogin=async (req,res)=>{
    try {
        const {code} = req.query;
        const googleRes=await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(googleRes.tokens)
        const userRes=await axios.get("https://www.googleapis.com/oauth2/v1/userinfo",{
            headers:{Authorization:`Bearer ${googleRes.tokens.access_token}`}
        })
        const{email,name,picture}=userRes.data;
        let user = await User.findOne({email});
        if(!user){
            user=await User.create({
                name,
                email,
                image:picture
            })
        }
        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        console.log(user);
        
        return res.status(200).json({
            status:"success",
            user,
            token
        })
    
    } catch (error) {
        console.error("Google login error:", error);
        res.status(500).json({
            status:"error",
            message: error.message || "Something went wrong"
        })
    }
}
export {googleLogin}