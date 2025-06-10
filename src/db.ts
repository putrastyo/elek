import { Pool } from "pg";
import dotenv from "dotenv";
import logger from "./logger/logger";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
//
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : undefined,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
});

pool.on("error", (err) => {
  logger.error(`Database connection error: ${err.message}`);
  process.exit(1);
});

pool
  .connect()
  .then(() => {
    logger.info(
      `Connected to ${process.env.PG_DATABASE} on ${process.env.PG_HOST}:${process.env.PG_PORT}`
    );
  })
  .catch(() => {
    logger.error(
      `Error connecting to ${process.env.PG_DATABASE} on ${process.env.PG_HOST}:${process.env.PG_PORT}`
    );
    process.exit(1);
  });

export default pool;
