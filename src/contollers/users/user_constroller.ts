import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/User";
import { v4 as uuidv4 } from "uuid";
import { hashPwd } from "../../helpers/password_handler";
import users from "../../use_cases/users/index";


export class UsersController {
    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password }: { email: string , password: string } = req.body;
            const result = await users.login(email, password);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async signUp(req: Request, res: Response, next: NextFunction) {
        try {
            const { firstName, lastName, email, document, phone, password } = req.body;

            const hashes = hashPwd(password);

            const newUser = new User();
            newUser.id = uuidv4();
            newUser.first_name = firstName;
            newUser.last_name = lastName;
            newUser.email = email;
            newUser.document = document;
            newUser.phone = phone;
            newUser.password = hashes.password;
            newUser.password_salt = hashes.password_salt
            await newUser.save();
            
            res.json(newUser);
        } catch (error) {
            next(error);
        }
    }
}