import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB()
//server is listening from here
app.listen(process.env.PORT,()=>{console.log(`Server is working on the port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)})