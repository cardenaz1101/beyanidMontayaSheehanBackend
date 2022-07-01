import crypto from "crypto";

export type hashPwdFn = (pwd: string) => IPasswordHasherResult;
export interface IPasswordHasherResult {
    password: string;
    password_salt: string;
}
export class HasherPasswordResult implements IPasswordHasherResult {

    password: string;
    password_salt: string;

    constructor(password: string, password_salt: string) {
        this.password = password;
        this.password_salt = password_salt;
    }
}

const SIZE = 64;
const ENCODING = "hex";
const ALGORITHM = "sha256";

const hashPwd: hashPwdFn = (password: string) => {

    const salt = crypto.randomBytes(SIZE).toString(ENCODING);
    const hashed = crypto.createHmac(ALGORITHM, salt).update(password).digest(ENCODING);
    return new HasherPasswordResult ( hashed, salt );

}

const service = {
    hashPwd,
}
export default service;
export {
    hashPwd
};