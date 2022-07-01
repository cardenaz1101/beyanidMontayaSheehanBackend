"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
require("dotenv/config");
const db_1 = require("./database/db");
const app = (0, express_1.default)();
const index_1 = require("./routes/index");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use(express.urlencoded({extended: false}))
app.use((0, morgan_1.default)('dev'));
const PORT = 4000;
app.get('/ping', (_req, res) => {
    res.send('pong');
});
app.use('/api', index_1.router);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.AppDataSource.initialize();
            console.log('Database connected');
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
