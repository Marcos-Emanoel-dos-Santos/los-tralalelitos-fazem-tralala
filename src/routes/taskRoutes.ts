import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

export const taskRouter = Router();

taskRouter.get("/", TaskController.list);
