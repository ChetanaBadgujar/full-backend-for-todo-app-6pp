import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
//backend creation goes here  
export const app = express()

//dotenv varible connection
config({
    path:"./data/config.env"
})


//using middleware -> json data encode krne ke liye
app.use(express.json())
//for accessing id from cookies
app.use(cookieParser())

//cors -> Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain. 
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,//frontend me cookies jane ke liye true krte hai and frontend me with_credential or jo bhi kuch headers me message bhejna chah re h, toh
}))

//using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)


//Routes creation starts form here
app.get("/",(req,res)=>{
    res.send("Nice Working")
})


//using error middleware
app.use(errorMiddleware)