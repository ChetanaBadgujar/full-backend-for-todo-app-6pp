import express from "express";
import { deleteTask, newTask, updateTask } from "../controllers/task.js";
import { getTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js"; //for middle ware
const router  = express.Router();


router.post("/new",isAuthenticated,newTask)
router.get("/gettask",isAuthenticated,getTask)

router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask)
export default router
