import { DocumentType } from "../../entities/Document_types";
import { NotFound } from "http-errors";

const build = () => {
  const execute = async (id: string) => {
    try {
      const documentType = await DocumentType.getRepository()
        .createQueryBuilder("document_types")
        .where("document_types.id = :id", { id })
        .leftJoinAndSelect("document_types.documents", "documents")
        .getMany();

      if (!documentType) throw new NotFound("document type does not exist");

      return documentType;
    } catch (error) {
      throw error;
    }
  };

  return execute;
};

export { build };
