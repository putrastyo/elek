import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Req send!");
});

app.listen(port, () => {
  console.log(`Server menyala bosq localhost:${port}`);
});
