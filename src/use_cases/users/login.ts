
import { User } from "../../entities/User";
import crypto from 'crypto';
import jwt from "jsonwebtoken";
// import  bcrypt from "bcryptjs";
const ENCODING = 'hex'
const ALGORITHM = 'sha256'
// import { response } from "express";

const build = () => {
    const execute = async(email: string, password: string) => {
        try {
            const user = await getUserByLogin(email);
            
            const passwordCorrect = user === null ? false : validatePwd(password, user.password_salt, user.password) ;

            console.log(passwordCorrect);
            if(!(user && passwordCorrect)) {
                console.log('Invalid email or password');
            }
            

            const userForToken = {
                id: user.id,
                email: user.email
            }

            console.log(process.env.JWT_SECRET);
            

            const token = jwt.sign(userForToken, process.env.JWT_SECRET)

            return token;
        } catch (error) {
            throw error;
        }
    }

    const getUserByLogin = async (email: string) => {
        try {
            console.log(email);
            
            const user = await User.findOneBy({email});
            return user;
        }catch (err) {
            throw err;
        }
    }

    const validatePwd = (password: string, password_salt: string, hashed: string) => {
        const toVerify = crypto.createHmac(ALGORITHM, password_salt)
            .update(password)
            .digest(ENCODING);
        return (hashed === toVerify);
    }


    return execute;
}

export {build}