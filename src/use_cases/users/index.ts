import { build as buildLogin } from "./login";
import { build as buildSignUp } from "./signUp";

const login = buildLogin();
const signUp = buildSignUp();

const service = {
    login,
    signUp
}
export default service;
export {
    login,
    signUp
}