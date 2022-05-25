import { DocumentDefinition } from "mongoose";
import TaskModel, { TaskDocument } from "../models/task.model";
import { log } from "../utils";

export async function createTaskService(
	input: DocumentDefinition<Omit<TaskDocument, "createdAt" | "updatedAt">>
) {
	try {
		log.info("Creating task...");
		const task = await TaskModel.create(input);
		console.log(task);
		log.info("Task created");
		return task;
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		throw new Error(error);
	}
}
