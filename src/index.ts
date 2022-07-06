import express from "express";
import morgan from "morgan";
import cors from "cors";

import "reflect-metadata"
import 'dotenv/config'

import { AppDataSource } from "./database/db";

const app = express();

import { router } from "./routes/index";

// var corsOptions = {
//     origin: '*', // Reemplazar con dominio
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));
// app.use(
//     cors({
//       methods: "GET" // only allow GET requests
//     })
// );
// var corsOptions = {
//     origin: 'http://localhost:4000', // Reemplazar con dominio
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors());
app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'));

const PORT = 4000;

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.use('/api', router);

async function main () {
    try {
        await AppDataSource.initialize()
        console.log('Database connected');
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    } catch (error) {
        console.error(error);
        
    }
}

main()
