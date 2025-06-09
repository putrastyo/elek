import express, { Request, Response } from "express";
import pool from "./db";

const router = express.Router();

// Get all users
router.get("/", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
