import { build as buildGetDocumentTypes } from "./get_all";
import { build as buildGetOneDocumentTypes } from "./get_one_by_id";

const getAll = buildGetDocumentTypes();
const getOneById = buildGetOneDocumentTypes();

const service = {
    getAll,
    getOneById
}
export default service;
export {
    getAll,
    getOneById
}