import express from "express";
const app = express();

import { router } from "./routes/index";

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here')
    res.send('pong');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    
});