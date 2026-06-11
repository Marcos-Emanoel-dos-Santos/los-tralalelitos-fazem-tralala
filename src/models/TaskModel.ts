import { Task } from "./Task";

class TaskModel {
    private tasks: Task[] = [
        { id: 1, title: "Task 1", done: false },
        {id: 2, title: "Task 2", done: false },
    ];

    findAll(): Task[] {
        return this.tasks;
    }
}

export const taskModel = new TaskModel();