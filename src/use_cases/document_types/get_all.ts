
import { DocumentType } from "../../entities/Document_types";

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