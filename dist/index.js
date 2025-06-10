"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = __importDefault(require("./contact"));
const logger_1 = __importDefault(require("./logger/logger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/contact", contact_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger_1.default.info(`Server started on port ${port}`);
});
