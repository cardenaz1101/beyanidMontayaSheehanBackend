
import { DocumentType } from "../../entities/Document_types";
// import crypto from 'crypto';
// import jwt from "jsonwebtoken";
// // import  bcrypt from "bcryptjs";
// const ENCODING = 'hex'
// const ALGORITHM = 'sha256'
// import { response } from "express";

const build = () => {
    const execute = async() => {
        try {

            const documentTypes = await DocumentType.find();

            return documentTypes;
        } catch (error) {
            throw error;
        }
    }

    return execute;
}

export {build}