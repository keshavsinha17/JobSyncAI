import { Router } from "express";
import { googleLogin } from "../controllers/Auth.controller.js";
const router = Router();
router.get("/", (req, res) => {
    res.send("hello world this is server");
})
router.get("/google", googleLogin)
export default router