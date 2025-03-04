import jwt from 'jsonwebtoken';
import { User } from '../models/user.Model.js';

export const authMiddleware = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                status: "error",
                message: "Authentication required" 
            });
        }

        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user from database
        const user = await User.findById(decoded._id);
        if (!user) {
       
            return res.status(401).json({ 
                status: "error",
                message: "User not found" 
            });
        }

        // Add user to request object
        req.user = user;
        next(); 
    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(401).json({ 
            status: "error",
            message: "Invalid authentication" 
        });
    }
};