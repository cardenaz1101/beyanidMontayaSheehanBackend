
import { DocumentType } from "../../entities/Document_types";

const build = () => {
    const execute = async(id: string) => {
        try {

            console.log("docu");

            const documentType = await DocumentType
                .getRepository()
                .createQueryBuilder("document_types")
                .where("document_types.id = :id", { id })
                .leftJoinAndSelect("document_types.documents", "documents")
                .getMany()

            return documentType;
        } catch (error) {
            throw error;
        }
    }

    return execute;
}

export {build}