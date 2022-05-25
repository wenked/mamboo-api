import { Express, Request, Response } from "express";
import { createTask } from "./controller/task.controller";
import validateResource from "./middleware/validateResource";
import { createTaskSchema } from "./schema/task.schema";

export default function routes(app: Express) {
	app.post("/create", validateResource(createTaskSchema), createTask);
}
