import dayjs from "dayjs";
import logger from "pino";

const log = logger({
	base: {
		pid: false,
	},
	transport: {
		options: {
			colorize: true,
		},
		target: "pino-pretty",
	},
	timestamp: () => `,"time":"${dayjs().locale("pt-br").format()}"`,
});

export default log;
