import express from "express";
import router from "./contact";

const app = express();

app.use(express.json());

app.use("/contact", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
