import { Request, Response } from "express";
import users from "../../use_cases/users/index";

export class UsersController {
    async login(req: Request, res: any, next: any): Promise<void> {
        try {
            const { email, password }: { email: string , password: string } = req.body;
            const result = await users.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    async signUp(req: Request, res: Response, next: any): Promise<void> {
        try {
            const result = await users.signUp(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}