import express, { Application } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Req send!");
});

app.listen(port, () => {
  console.log(`Server menyala bosq localhost:${port}`);
});
