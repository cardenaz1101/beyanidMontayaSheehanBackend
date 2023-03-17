import { build as buildGetAllCategories } from "./get_all";

const getAll = buildGetAllCategories();

const service = {
    getAll
}
export default service;
export {
    getAll
}