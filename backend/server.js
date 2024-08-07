import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth_routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();

const PORT = process.env.PORT||5000;
dotenv.config();
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
/*
app.get("/",(req,res)=>res.send('Hello World'));
*/
/*
app.get("api/auth/signup",(req, res)=>console.log("signup route"));
app.get("api/auth/login",(req, res)=>console.log("login route"));
app.get("api/auth/logout",(req, res)=>console.log("logout route"));
app.get("api/auth/signup",(req, res)=>console.log("signup route"));
app.get("api/auth/login",(req, res)=>console.log("login route"));
app.get("api/auth/logout",(req, res)=>console.log("logout route"));
*/

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`)
});
