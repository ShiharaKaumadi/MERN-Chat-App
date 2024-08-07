import express from "express";
import protectRoute from "../middleware/protect.route.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar)
export default router;