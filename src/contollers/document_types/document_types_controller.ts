import { NextFunction, Request, Response } from "express";
// import { User } from "../../entities/User";
// import { v4 as uuidv4 } from "uuid";
// import { hashPwd } from "../../helpers/password_handler";
import documentTypes from "../../use_cases/document_types/index";


export class DocumentTypesController {
    async get(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await documentTypes.getAll();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}