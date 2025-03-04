import mongoose from "mongoose";
import { Job } from "../models/jobs.model.js";

// Create a new job
const addJob = async (req, res) => {
    try {
        const { title, company, description, salary, link, status } = req.body;
        const userId = req.user._id;

        if (!title || !company || !description || !salary || !link) {
            return res.status(400).json({ 
                status: "error",
                message: "All fields are required" 
            });
        }

        const newJob = await Job.create({
            title,
            company,
            description,
            salary,
            link,
            status: status || 'pending',
            user: userId
        });

        return res.status(201).json({
            status: "success",
            message: "Successfully added job",
            data: newJob
        });

    } catch (error) {
        console.error("Add job error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to add job" 
        });
    }
};

// Get all jobs for logged in user
const getUserJobs = async (req, res) => {
    try {
        const userId = req.user._id;
        const { status } = req.query; // Optional status filter

        let query = { user: userId };
        if (status) {
            query.status = status;
        }

        const jobs = await Job.find(query)
            .sort({ createdAt: -1 });

        return res.status(200).json({
            status: "success",
            data: jobs
        });

    } catch (error) {
        console.error("Get user jobs error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to fetch jobs" 
        });
    }
};

// Get a single job by ID
const getJobById = async (req, res) => {
    try {
        const { jobId } = req.params;
        const userId = req.user._id;

        const job = await Job.findOne({ _id: jobId, user: userId });
        
        if (!job) {
            return res.status(404).json({
                status: "error",
                message: "Job not found"
            });
        }

        return res.status(200).json({
            status: "success",
            data: job
        });

    } catch (error) {
        console.error("Get job error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to fetch job" 
        });
    }
};

// Update a job
const updateJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const userId = req.user._id;
        const updates = req.body;

        // Prevent updating user field
        delete updates.user;

        const job = await Job.findOneAndUpdate(
            { _id: jobId, user: userId },
            updates,
            { new: true, runValidators: true }
        );

        if (!job) {
            return res.status(404).json({
                status: "error",
                message: "Job not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Job updated successfully",
            data: job
        });

    } catch (error) {
        console.error("Update job error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to update job" 
        });
    }
};

// Update job status
const updateJobStatus = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { status } = req.body;
        const userId = req.user._id;

        if (!['pending', 'applied', 'interviewing', 'offered', 'rejected'].includes(status)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid status value"
            });
        }

        const job = await Job.findOneAndUpdate(
            { _id: jobId, user: userId },
            { status },
            { new: true }
        );

        if (!job) {
            return res.status(404).json({
                status: "error",
                message: "Job not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Job status updated successfully",
            data: job
        });

    } catch (error) {
        console.error("Update status error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to update status" 
        });
    }
};

// Delete a job
const deleteJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const userId = req.user._id;

        const job = await Job.findOneAndDelete({ _id: jobId, user: userId });

        if (!job) {
            return res.status(404).json({
                status: "error",
                message: "Job not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Job deleted successfully"
        });

    } catch (error) {
        console.error("Delete job error:", error);
        return res.status(500).json({ 
            status: "error",
            message: error.message || "Failed to delete job" 
        });
    }
};

export { 
    addJob, 
    getUserJobs, 
    getJobById, 
    updateJob, 
    updateJobStatus, 
    deleteJob 
};