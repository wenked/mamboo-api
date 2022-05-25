import config from "config";
import express from "express";
import { connect, log } from "./utils";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
	log.info(`Server is running on port ${port}`);

	await connect();
});
