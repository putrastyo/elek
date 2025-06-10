import express, { Request, Response } from "express";
import pool from "./db";
import logger from "./logger/logger";

const router = express.Router();

// Get all contacts
router.get("/", async (req: Request, res: Response) => {
  logger.info("Getting all contacts");
  const result = await pool.query("SELECT * FROM contacts");
  res.json(result.rows);
});

router.post("/", async (req: Request, res: Response) => {
  logger.info("Creating a new contact");
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO contacts (name, email) VALUES($1, $2) RETURNING *",
      [name, email]
    );

    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    logger.error(err.message);
  }
});

export default router;
