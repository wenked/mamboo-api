import { Request, Response } from "express";
import { CreateTaskInput, UpdateTaskInput } from "../schema/task.schema";
import {
	createTaskService,
	deleteTaskService,
	listAllTasksService,
	updateTaskService,
} from "../services/task.service";
import { log } from "../utils";

export async function listAllTasksHandler(req: Request, res: Response) {
	try {
		const tasks = await listAllTasksService();

		res.status(200).json(tasks);
	} catch (error: any) {
		log.error(`Error listing all tasks: ${error}`);
		return res.status(400).json({ error: error.message });
	}
}

export async function createTaskHandler(
	req: Request<{}, {}, CreateTaskInput["body"]>,
	res: Response
) {
	try {
		const task = await createTaskService(req.body);

		return res.status(200).json(task);
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		return res.status(400).json({ error: error.message });
	}
}

export async function updateTaskHandler(
	req: Request<UpdateTaskInput["params"], {}, UpdateTaskInput["body"]>,
	res: Response
) {
	try {
		const { _id } = req.params;
		const update = req.body;

		const updatedTask = await updateTaskService({ _id }, update, {
			new: true,
		});

		return res.status(200).json(updatedTask);
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		return res.status(400).json({ error: error.message });
	}
}

export async function deleteTaskHandler(
	req: Request<UpdateTaskInput["params"], {}, {}>,
	res: Response
) {
	try {
		const { _id } = req.params;

		const deletedTask = await deleteTaskService({ _id });

		return res.status(200).json(deletedTask);
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		return res.status(400).json({ error: error.message });
	}
}
