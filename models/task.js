import mongoose from "mongoose"

//models starts here
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

//user creation for model
export const Task = mongoose.model("task",taskSchema)