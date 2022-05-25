import config from "config";
import mongoose from "mongoose";
import { log } from "../utils";

export default async function connect() {
	const dbUri = config.get<string>("dbUri");
	try {
		await mongoose.connect(dbUri);
		log.info(`Connected to DB`);
	} catch (error) {
		log.error(`Error connecting to mongo:${error}`);
		process.exit(1);
	}
}
