import { config } from "dotenv";

config();

export default {
  HOST: process.env.SERVER_HOST || "0.0.0.0",
  PORT: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 8080,
};
