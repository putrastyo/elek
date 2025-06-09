import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : undefined,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
});

console.log(
  `Connected to ${process.env.PG_DATABASE} on ${process.env.PG_HOST}:${process.env.PG_PORT}`
);

export default pool;
