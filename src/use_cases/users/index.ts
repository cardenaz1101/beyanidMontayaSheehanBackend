import { build as buildLogin } from "./login";

const login = buildLogin();

const service = {
    login
}
export default service;
export {
    login
}