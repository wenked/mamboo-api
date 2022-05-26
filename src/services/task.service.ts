import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import TaskModel, { TaskDocument } from "../models/task.model";
import { log } from "../utils";

export async function listAllTasksService() {
	try {
		const tasks = await TaskModel.find();

		return tasks;
	} catch (error: any) {
		log.error(`Error listing all tasks: ${error}`);
		throw new Error(error);
	}
}

export async function createTaskService(
	input: DocumentDefinition<Omit<TaskDocument, "createdAt" | "updatedAt">>
) {
	try {
		log.info("Creating task...");
		const task = await TaskModel.create(input);

		log.info("Task created!");
		return task;
	} catch (error: any) {
		log.error(`Error creating task: ${error}`);
		throw new Error(error);
	}
}

export async function updateTaskService(
	query: FilterQuery<TaskDocument>,
	update: UpdateQuery<TaskDocument>,
	options?: QueryOptions
) {
	try {
		log.info("Updating task...");
		const updatedTask = await TaskModel.findOneAndUpdate(query, update, options);

		log.info("Task updated!");
		return updatedTask;
	} catch (error: any) {
		log.error(`Error updating task: ${error}`);
		throw new Error(error);
	}
}

export async function deleteTaskService(query: FilterQuery<TaskDocument>) {
	try {
		log.info("Deleting task...");
		const deletedTask = await TaskModel.deleteOne(query);

		return deletedTask;
	} catch (error: any) {
		log.error(`Error deleting task: ${error}`);
		throw new Error(error);
	}
}
