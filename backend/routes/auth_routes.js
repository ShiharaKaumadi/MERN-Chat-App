import express from "express";
const router = express.Router();
import {login,logout,signup} from "../controllers/auth.controller.js";
/*
router.get("/login",(req,res)=>res.send('login route'));
router.get("/logout",(req,res)=>res.send('logout route'));
router.get("/signup",(req,res)=>res.send('signup route'));
*/
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;