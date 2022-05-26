import { TypeOf, object, string } from "zod";

export const createTaskSchema = object({
	body: object({
		description: string({
			required_error: "Description is required",
		}),
		name: string({
			required_error: "Name is required",
		}),
		status: string({
			required_error: "Status is required",
		}),
	}),
});

export const updateTaskSchema = object({
	body: object({
		description: string().optional(),
		name: string().optional(),
		status: string().optional(),
	}),
	params: object({
		_id: string({ required_error: "Id is required" }),
	}),
});

export const deleteTaskSchema = object({
	params: object({
		_id: string({ required_error: "Id is required" }),
	}),
});

export type DeleteTaskInput = TypeOf<typeof deleteTaskSchema>;
export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
export type UpdateTaskInput = TypeOf<typeof updateTaskSchema>;
