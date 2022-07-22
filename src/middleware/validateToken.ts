import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { InternalServerError } from "http-errors";

const validate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorization = req.get('authorization');
        let token = '';
        
        if(authorization && authorization.toLowerCase().startsWith('bearer')){
            token = authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET);
        }else{
            throw new InternalServerError("token missing or invalid");    
        }
        next();
    } catch (error) {
        throw new InternalServerError("token missing or invalid");
    }
}
export {
    validate
}