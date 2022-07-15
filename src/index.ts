import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
// import createError from "http-errors";

import "reflect-metadata";
import "dotenv/config";

import { AppDataSource } from "./database/db";

const app = express();

import { router } from "./routes/index";

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}))

app.use(morgan("dev"));

const PORT = 4000;

app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
  res.send("pong");
});

app.use("/api", router);

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

const handleErrors = (err:any ,req: Request, res: Response, next: NextFunction) =>  {
  // console.log(res.statusCode);
  res.status(500).send(err);
}

app.use(handleErrors);
main();


