import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // const task = new Task({title,desc}) // this is also same as task.create() method
    // await task.save()

    await Task.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task Added Successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const user_Id = req.user._id; // user ki id se mathc krenge
    const tasks = await Task.find({ user: user_Id });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findTask = await Task.findById(id);

    if (!findTask) return next(new ErrorHandler("Task Not FOund", 404));

    findTask.isCompleted = !findTask.isCompleted;

    await findTask.save();
    res.status(200).json({
      success: true,
      message: "Task Updated.",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findTask = await Task.findById(id);

    if (!findTask) return next(new ErrorHandler("Task Not FOund", 404));

    await findTask.remove();

    res.status(200).json({
      success: true,
      message: "Task Deleted.",
    });
  } catch (error) {
    next(error);
  }
};
