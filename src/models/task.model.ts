import mongoose from "mongoose";

export interface TaskDocument extends mongoose.Document {
	createdAt: Date;
	description: string;
	name: string;
	status: string;
	updatedAt: Date;
}

const taskSchema = new mongoose.Schema(
	{
		description: {
			required: true,
			type: String,
		},
		name: {
			required: true,
			type: String,
		},
		status: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
