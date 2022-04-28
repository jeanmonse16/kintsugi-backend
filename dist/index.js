"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `./${process.env.ENV}.env` });
console.log(process.env.ENV);
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
server.keepAliveTimeout = 65000;
