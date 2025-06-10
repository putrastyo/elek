import express from "express";
import router from "./contact";
import logger from "./logger/logger";

const app = express();

app.use(express.json());

app.use("/contact", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
