import dotenv from "dotenv";

dotenv.config();

export default {
	dbUri: process.env.DB_URI,
	port: Number(process.env.PORT) || 1337,
};
