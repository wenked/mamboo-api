import dotenv from "dotenv";

dotenv.config();

export default {
	dbUri: process.env.DB_URI,
	port: 1337,
};
