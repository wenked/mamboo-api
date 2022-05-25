import { Request, Response } from "express";
import { CreateTaskInput } from "../schema/task.schema";
import { createTaskService } from "../services/task.service";
import { log } from "../utils";

export async function createTask(req: Request<{}, {}, CreateTaskInput["body"]>, res: Response) {
	try {
		const task = await createTaskService(req.body);

		return res.status(200).json(task);
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		return res.status(400).json({ error: error.message });
	}
}
