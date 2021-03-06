import config from "config";
import cors from "cors";
import express from "express";
import routes from "./routes";
import { connect, log } from "./utils";

const port = config.get<number>("port");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, async () => {
	log.info(`Server is running on port ${port}`);

	await connect();

	routes(app);
});
