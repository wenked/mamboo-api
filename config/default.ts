import dotenv from "dotenv";
dotenv.config();
export default {
	dbUri: `mongodb://${process.env.DB_HOSTNAME}:27017/${process.env.DB_DATABASE}`,
	port: 1337,
};
