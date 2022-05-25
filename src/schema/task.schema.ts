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

export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
