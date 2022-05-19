import { NextFunction, Request, Response } from "express";

export class UsersController {
    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req.body);
            console.log('i will login');
            res.json(req.body);
        } catch (error) {
            next(error);
        }
    }
}