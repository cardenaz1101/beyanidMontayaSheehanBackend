"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const index_1 = require("./routes/index");
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here');
    res.send('pong');
});
app.use('/api', index_1.router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
