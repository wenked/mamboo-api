import { Express } from "express";
import {
	createTaskHandler,
	deleteTaskHandler,
	listAllTasksHandler,
	updateTaskHandler,
} from "./controller/task.controller";
import validateResource from "./middleware/validateResource";
import {
	createTaskSchema,
	deleteTaskSchema,
	listAllTasksSchema,
	updateTaskSchema,
} from "./schema/task.schema";

export default function routes(app: Express) {
	app.get("/list", validateResource(listAllTasksSchema), listAllTasksHandler);
	app.post("/create", validateResource(createTaskSchema), createTaskHandler);
	app.post("/update/:_id", validateResource(updateTaskSchema), updateTaskHandler);
	app.delete("/delete/:_id", validateResource(deleteTaskSchema), deleteTaskHandler);
}
