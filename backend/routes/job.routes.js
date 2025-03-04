import { Router } from "express";
// import { getJobs, addJob, updateJob, deleteJob } from "../controllers/job.controller.js";
import { 
    addJob, 
    getUserJobs, 
    getJobById, 
    updateJob, 
    updateJobStatus, 
    deleteJob 
} from "../controllers/Job.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Protect all job routes with auth middleware
router.use(authMiddleware);

// router.get("/", getJobs);
router.post("/add", addJob);
router.get("/my-jobs", getUserJobs);
router.get("/:jobId", getJobById);
router.put("/:jobId", updateJob);
router.patch("/:jobId/status", updateJobStatus);
router.delete("/:jobId", deleteJob);
// router.put("/:id", updateJob);
// router.put("/:id", updateJobStatus);
// router.delete("/:id", deleteJob);

export default router;