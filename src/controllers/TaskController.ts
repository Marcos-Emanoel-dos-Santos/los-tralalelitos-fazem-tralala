import { Request, Response } from "express";
import { taskModel } from "../models/TaskModel.js";

export const TaskController = {
    list(req: Request, res: Response){
        const tasks = taskModel.findAll();
        res.render("tasks", { tasks });
    },
}