import express from "express";
import {sendMessage} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protect.route.js";
const router = express.Router();

/*
router.get("/login",(req,res)=>res.send('login route'));
router.get("/logout",(req,res)=>res.send('logout route'));
router.get("/signup",(req,res)=>res.send('signup route'));
*/
router.post("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);


export default router;